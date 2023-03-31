import { defineStore } from 'pinia';

const isDark = useDark();
const toggleDark = useToggle(isDark);
export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: true,
    isLoading: false,
  }),
  getters: {},
  actions: {
    switchTheme() {
      this.isDark = toggleDark();
    },
    setLoading(value: boolean) {
      this.isLoading = value;
    },
  },
  persist: {
    key: 'Theme_STORE',
    storage: window.sessionStorage,
  },
});
