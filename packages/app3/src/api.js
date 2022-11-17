import { useHttp } from "./http.hook";

const useLksService = () => {
  const { request } = useHttp();
  const _apiBase = "http://dev.backend.littleknitsstory.com:26363/api/v1/";

  const getMenu = async () => {
    const res = await request(`${_apiBase}menu`);
    return res;
  };

  return { getMenu };
};

export default useLksService;
