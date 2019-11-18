import axios from "axios";
const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY": "2421ada6-1252-460b-9396-ab1208c1053a"
    }
})
export const API = {
    getUsers(pageSize, currentPage){
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => response.data)
    },
    changePage(pageSize, page){
        return instance.get(`users?count=${pageSize}&page=${page}`)
            .then(response=> response.data)
    },
    unFollow(id){
        return instance.delete(`follow/${id}`).then(response=> response.data)
    },
    inFollow(id){
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    setAuth(){
        return instance.get('auth/me').then(response => response.data)
    },
    loadMeProfile(){
        return instance.get(`auth/me`).then(response => response.data)
    },
    loadUserProfile(userId){
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    loadUserStatus(userId){
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },
    updateUserStatus(status){
        return instance.put(`profile/status`, {status: status}).then(response => response.data)
    },
    authLogin(email, password, rememberMe = false, captcha){
        return instance.post('auth/login', {email, password, rememberMe, captcha})
    },
    authLogout(){
        return instance.delete('auth/login')
    },
    captcha(){
        return instance.get('security/get-captcha-url').then(response=> response.data)
    },
    profileAvatar(file){
        let newPhotoAvatar = new FormData();
        newPhotoAvatar.append('image', file);
        return instance.put('profile/photo', newPhotoAvatar,{
            headers: {
                'Content-Type': `multipart/form-data`
            }
        }).then(response=> response.data)
    },
    updateProfileInfo(profileInfo){
        return instance.put(`profile`, profileInfo).then(response => response.data)
    }
}