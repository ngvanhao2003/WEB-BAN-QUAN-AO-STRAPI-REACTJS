import axiosInstance from "./axios";

const apiBrand = {
    //lay tat ca thuong hieu
    getAll: () => {
        return axiosInstance.get("/brands").then((res) => res.data);
    },
    //lay chi tiet thuong hieu
    getBrandById:(id)=>{
        return axiosInstance.get(`/brands/${id}`);
    },
};

export default apiBrand;
