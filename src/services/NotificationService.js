import http from "../http-common";

const getAll = async (params) => {
  const res = await http.get("/notification", {
    params
  });
  return res.data?.data;
};
const readAt = async (id) => {
  const res = await http.get(`/notification/read/${id}`);
  return res?.data;
};

const NotificationService = {
  getAll,
  readAt,
};

export default NotificationService;
