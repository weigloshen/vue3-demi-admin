import { defineStore } from 'pinia';
import { getVarColor } from '@/utils/varColor';
const isDark = useDark();
const toggleDark = useToggle(isDark);
export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: true,
    isLoading: false,
    themeColor: getVarColor(),
  }),
  getters: {},
  actions: {
    switchTheme() {
      this.isDark = toggleDark();
    },
    setLoading(value: boolean) {
      this.isLoading = value;
    },
    setColor(color: string) {
      this.themeColor = color;
    },
  },
  persist: {},
});
