import { gq as getFullApiResponse, a3 as defineStore, ad as useRootStore, r as ref, gr as DATA_STORE_STORE } from "./index-B6CXOKcF.js";
const fetchDataStores = async (context, projectId, options) => {
  return await getFullApiResponse(context, "GET", "/data-stores", {
    projectId,
    options
  });
};
const createDataStore = async (context, name, projectId) => {
  return await getFullApiResponse(context, "POST", "/data-stores", {
    name,
    projectId
  });
};
const useDataStoreStore = defineStore(DATA_STORE_STORE, () => {
  const rootStore = useRootStore();
  const dataStores = ref([]);
  const totalCount = ref(0);
  const loadDataStores = async (projectId, page, pageSize) => {
    const response = await fetchDataStores(rootStore.restApiContext, projectId, {
      page,
      pageSize
    });
    dataStores.value = response.data;
    totalCount.value = response.count;
  };
  const createNewDataStore = async (name, projectId) => {
    const newStore = await createDataStore(rootStore.restApiContext, name, projectId);
    dataStores.value.push(newStore.data);
    totalCount.value += 1;
    return newStore;
  };
  return {
    dataStores,
    totalCount,
    loadDataStores,
    createNewDataStore
  };
});
export {
  useDataStoreStore as u
};
