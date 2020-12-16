import axios from 'axios';
import { Loading } from 'element-ui';
// import Qs from 'qs';
let loadingRequestCount = 0;
let loadingInstance;
const ajax = axios.create({
	// baseURL: 'http://192.168.1.52:8082/', // 公共地址
	timeout: 30000, // 超时
})

const showLoading = () => {
	if (loadingRequestCount === 0) {
		loadingInstance = Loading.service({
			lock: true,
			text: '加载中……',
			background: 'rgba(0, 0, 0, 0.5)'
		});
	}
	loadingRequestCount++
}

const hideLoading = () => {
	loadingRequestCount--
	if (loadingRequestCount === 0) {
		loadingInstance.close();
	}
	if (loadingRequestCount <= 0) return
}
ajax.interceptors.request.use(config => {
	showLoading(config)
	return config;
}, error => {
	return Promise.error(error);
})
ajax.interceptors.response.use(
	response => {
		setTimeout(() => {
			hideLoading()
		}, 200);
		return response;
	},
	error => {
		setTimeout(() => {
			hideLoading()
		}, 200);
		return Promise.error(error)
	}
);


export function get(url, params) {
	// JSON.parse(JSON.stringify(params)))
	// console.log(JSON.parse(JSON.stringify(params)))
	return new Promise((resolve, reject) => {
		ajax.get(url, { params }).then(res => {
			resolve(res.data);
		}).catch(err => {
			reject(err.data)
		})
	});

}
export function post(url, params, name) {
	return new Promise((resolve, reject) => {
		ajax.post(url, params, name)
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.msg);
			})
	});
}
//下载文件
export function down(url, params) {
	return new Promise((resolve, reject) => {
		ajax({
			method: 'post',
			url,
			data:params,
			responseType: 'blob'
		})
			.then(res => {
				resolve(res);
			})
			.catch(err => {
				reject(err.msg);
			})
	});
}