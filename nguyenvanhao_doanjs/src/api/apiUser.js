import axiosInstance from "./axios";


const apiUser = {
      //lấy tất cả nguoi dung
      getAll:() => {
        return axiosInstance.get("/users?populate=*").then((res) => res.data);
    },
    //create user
    createUser: (data) => {
      return axiosInstance.post("/auth/local/register", data);  
    },
    //kiem tra dang nhap
    loginUser: (data) => {
        return axiosInstance.post("/auth/local", data);
    },
    //lay thong tin nguoi dung
    getUserById: (id) => {
      return axiosInstance.get(`/users/${id}`);
  },
}

export default apiUser;