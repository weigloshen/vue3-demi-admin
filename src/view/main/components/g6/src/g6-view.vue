<!-- html结构 -->
<template>
  <!-- <div id="mountNode"></div> -->
  <div id="g6"></div>
</template>

<!-- vue(Ts)代码 -->
<script setup lang="ts">
import G6 from '@antv/g6';

onMounted(() => {
  const container = document.getElementById('g6') as HTMLDivElement;
  const descriptionDiv = document.createElement('div');
  descriptionDiv.innerHTML =
    'Move a subtree to a new parent by dragging the root node of the subtree.';
  container.appendChild(descriptionDiv);

  fetch(
    'https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json',
  )
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('g6');
      const width = container!.scrollWidth;
      const height = (container!.scrollHeight || 500) - 20;
      const graph = new G6.TreeGraph({
        container: 'g6',
        width,
        height,
        modes: {
          default: [
            'drag-canvas',
            'zoom-canvas',
            {
              type: 'drag-node',
              enableDelegate: true,
            },
          ],
        },
        defaultNode: {
          size: [26, 26],
          anchorPoints: [
            [0, 0.5],
            [1, 0.5],
          ],
          style: {
            fill: '#C6E5FF',
            stroke: '#5B8FF9',
          },
        },
        defaultEdge: {
          type: 'cubic-horizontal',
          style: {
            stroke: '#A3B1BF',
          },
        },
        nodeStateStyles: {
          closest: {
            fill: '#f00',
          },
        },
        layout: {
          type: 'compactBox',
          direction: 'LR',
          getId: function getId(d: any) {
            return d.id;
          },
          getHeight: function getHeight() {
            return 16;
          },
          getWidth: function getWidth() {
            return 16;
          },
          getVGap: function getVGap() {
            return 10;
          },
          getHGap: function getHGap() {
            return 100;
          },
        },
      });

      graph.node(function (node) {
        return {
          label: node.id,
          labelCfg: {
            offset: 10,
            position:
              node.children && node.children.length > 0 ? 'left' : 'right',
          },
        };
      });

      graph.data(data);
      graph.render();
      graph.fitView();

      let minDisNode: any;
      graph.on('node:dragstart', () => {
        minDisNode = undefined;
      });
      graph.on('node:drag', e => {
        minDisNode = undefined;
        const item = e.item;
        const model = item!.getModel();
        const nodes = graph.getNodes();
        let minDis = Infinity;
        nodes.forEach(inode => {
          graph.setItemState(inode, 'closest', false);
          const node = inode.getModel();
          if (node.id === model.id) return;
          if (!node.x || !node.y) return;
          const dis =
            (node.x - e.x) * (node.x - e.x) + (node.y - e.y) * (node.y - e.y);
          if (dis < minDis) {
            minDis = dis;
            minDisNode = inode;
          }
        });
        console.log('minDis', minDis, minDisNode);
        if (minDis < 2000) graph.setItemState(minDisNode, 'closest', true);
        else minDisNode = undefined;
      });

      graph.on('node:dragend', e => {
        if (!minDisNode) {
          descriptionDiv.innerHTML =
            'Failed. No node close to the dragged node.';
          return;
        }
        const item = e.item;
        const id = item && item.getID();
        const data = graph.findDataById(id as string);
        // if the minDisNode is a descent of the dragged node, return
        let isDescent = false;
        const minDisNodeId = minDisNode.getID();
        console.log('dragend', minDisNodeId, isDescent, data, id);

        G6.Util.traverseTree(data, (d: any) => {
          if (d.id === minDisNodeId) isDescent = true;
        });
        if (isDescent) {
          descriptionDiv.innerHTML =
            'Failed. The target node is a descendant of the dragged node.';
          return;
        }
        graph.removeChild(id as string);

        setTimeout(() => {
          const newParentData = graph.findDataById(minDisNodeId);
          let newChildren = newParentData!.children;
          if (newChildren) newChildren.push(data!);
          else newChildren = [data!];
          graph.updateChildren(newChildren!, minDisNodeId);
          descriptionDiv.innerHTML = 'Success.';
        }, 600);
      });

      if (typeof window !== 'undefined')
        window.onresize = () => {
          if (!graph || graph.get('destroyed')) return;
          if (!container || !container.scrollWidth || !container.scrollHeight)
            return;
          graph.changeSize(container.scrollWidth, container.scrollHeight - 20);
        };
    });
});
</script>
<!-- 样式设置 -->
<style lang="scss" scoped>
#g6 {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
