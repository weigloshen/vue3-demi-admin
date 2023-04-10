import MyDialog from '@/components/dialog';
import MyForm from '@/components/form';
import MyTable from '@/components/table';
type IGlobalThis<T> = globalThis.ComputedRef<T>;
type FN = () => void;
// dialog的一些数据暴露
export const useDialog = (): [Ref<any>, FN, (row: any) => void] => {
  const modelRef = ref<InstanceType<typeof MyDialog>>();
  const showDialog = () => {
    modelRef.value &&
      (() => {
        modelRef.value.dialogFormVisible = true;
        modelRef.value.formRef?.on_reset();
      })();
  };
  const editDialog = (row: any) => {
    if (modelRef.value) {
      const formRef = modelRef.value.formRef;
      console.log(formRef);

      if (formRef) {
        if (!formRef.modelValue) formRef?.on_reset(row); // 如果在表单刚开始打开直接单机编辑按钮 form中的属性没有绑定起来 所以会没有数据
        Object.keys(row).forEach(key => {
          formRef.modelValue[key] = row[key];
        });
      }

      modelRef.value.dialogFormVisible = true;
    }
  };

  return [modelRef, showDialog, editDialog];
};

// form表单的一些数据暴露
export const useForm = (): [Ref<any>, IGlobalThis<any>] => {
  const formRef = ref<InstanceType<typeof MyForm>>();
  const formData = computed(() => formRef.value?.modelValue);
  return [formRef, formData];
};

// table暴露的一些数据
export const useTable = (): [
  Ref<any>,
  IGlobalThis<{
    size: number | undefined;
    number: number | undefined;
  }>,
  IGlobalThis<any[] | undefined>,
] => {
  const tableRef = ref<InstanceType<typeof MyTable>>();
  const pageInfo = computed(() => ({
    size: tableRef.value?.page_size,
    number: tableRef.value?.current_page,
  }));
  const checkedData = computed(() => tableRef.value?.checkedData);

  return [tableRef, pageInfo, checkedData];
};
