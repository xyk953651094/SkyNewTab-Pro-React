import {FormInitialValuesInterface, ImageDataInterface} from './publicInterface'
import {getDevice} from "./publicFunctions";

export let lightThemeArray = [
    // Material Design配色
    {"bodyBackgroundColor": "#FCE4EC", "componentBackgroundColor": "#E91E63"},
    {"bodyBackgroundColor": "#E91E63", "componentBackgroundColor": "#FCE4EC"},
    {"bodyBackgroundColor": "#F3E5F5", "componentBackgroundColor": "#9C27B0"},
    {"bodyBackgroundColor": "#EDE7F6", "componentBackgroundColor": "#673AB7"},
    {"bodyBackgroundColor": "#673AB7", "componentBackgroundColor": "#EDE7F6"},
    {"bodyBackgroundColor": "#E8EAF6", "componentBackgroundColor": "#3F51B5"},
    {"bodyBackgroundColor": "#E3F2FD", "componentBackgroundColor": "#2196F3"},
    {"bodyBackgroundColor": "#2196F3", "componentBackgroundColor": "#E3F2FD"},
    {"bodyBackgroundColor": "#E1F5FE", "componentBackgroundColor": "#03A9F4"},
    {"bodyBackgroundColor": "#03A9F4", "componentBackgroundColor": "#E1F5FE"},
    {"bodyBackgroundColor": "#00BCD4", "componentBackgroundColor": "#E0F7FA"},
    {"bodyBackgroundColor": "#009688", "componentBackgroundColor": "#E0F2F1"},
    {"bodyBackgroundColor": "#E8F5E9", "componentBackgroundColor": "#4CAF50"},
    {"bodyBackgroundColor": "#4CAF50", "componentBackgroundColor": "#E8F5E9"},
    {"bodyBackgroundColor": "#8BC34A", "componentBackgroundColor": "#F1F8E9"},
    {"bodyBackgroundColor": "#F9FBE7", "componentBackgroundColor": "#CDDC39"},
    {"bodyBackgroundColor": "#CDDC39", "componentBackgroundColor": "#F9FBE7"},
    {"bodyBackgroundColor": "#FFFDE7", "componentBackgroundColor": "#FFEB3B"},
    {"bodyBackgroundColor": "#FFF8E1", "componentBackgroundColor": "#FFC107"},
    {"bodyBackgroundColor": "#FFC107", "componentBackgroundColor": "#FFF8E1"},
    {"bodyBackgroundColor": "#FFF3E0", "componentBackgroundColor": "#FF9800"},
    {"bodyBackgroundColor": "#FF9800", "componentBackgroundColor": "#FFF3E0"},
    {"bodyBackgroundColor": "#FF5722", "componentBackgroundColor": "#FBE9E7"},
    {"bodyBackgroundColor": "#EFEBE9", "componentBackgroundColor": "#795548"},
    {"bodyBackgroundColor": "#795548", "componentBackgroundColor": "#EFEBE9"},
    {"bodyBackgroundColor": "#ECEFF1", "componentBackgroundColor": "#607D8B"},
    {"bodyBackgroundColor": "#607D8B", "componentBackgroundColor": "#ECEFF1"},
    {"bodyBackgroundColor": "#FAFAFA", "componentBackgroundColor": "#9E9E9E"},
    {"bodyBackgroundColor": "#9E9E9E", "componentBackgroundColor": "#FAFAFA"},

    // 高级配色
    {"bodyBackgroundColor": "#FAEFDE", "componentBackgroundColor": "#E42D44"},
    {"bodyBackgroundColor": "#E42D44", "componentBackgroundColor": "#FAEFDE"},
    {"bodyBackgroundColor": "#7BAD5F", "componentBackgroundColor": "#F2EAE0"},
    {"bodyBackgroundColor": "#E5D7AD", "componentBackgroundColor": "#614F4D"},
    {"bodyBackgroundColor": "#614F4D", "componentBackgroundColor": "#E5D7AD"},
    {"bodyBackgroundColor": "#5B3663", "componentBackgroundColor": "#FFD800"},
    {"bodyBackgroundColor": "#343130", "componentBackgroundColor": "#FF7900"},
    {"bodyBackgroundColor": "#EDB04C", "componentBackgroundColor": "#8A3C48"},
    {"bodyBackgroundColor": "#8A3C48", "componentBackgroundColor": "#EDB04C"},
    {"bodyBackgroundColor": "#A0C198", "componentBackgroundColor": "#535E4B"},
    {"bodyBackgroundColor": "#535E4B", "componentBackgroundColor": "#A0C198"},
    {"bodyBackgroundColor": "#CFA33E", "componentBackgroundColor": "#262424"},
    {"bodyBackgroundColor": "#262424", "componentBackgroundColor": "#CFA33E"},
    {"bodyBackgroundColor": "#D23538", "componentBackgroundColor": "#36527D"},
    {"bodyBackgroundColor": "#36527D", "componentBackgroundColor": "#D23538"},
    {"bodyBackgroundColor": "#F7F2ED", "componentBackgroundColor": "#8D587E"},
    {"bodyBackgroundColor": "#8D587E", "componentBackgroundColor": "#F7F2ED"},

    {"bodyBackgroundColor": "#FD454A", "componentBackgroundColor": "#FCBE23"},
    {"bodyBackgroundColor": "#4C3C36", "componentBackgroundColor": "#7CAC67"},
    {"bodyBackgroundColor": "#7CAC67", "componentBackgroundColor": "#4C3C36"},
    {"bodyBackgroundColor": "#013372", "componentBackgroundColor": "#C9AB70"},
    {"bodyBackgroundColor": "#C9AB70", "componentBackgroundColor": "#013372"},
    {"bodyBackgroundColor": "#F4EEE6", "componentBackgroundColor": "#362228"},
    {"bodyBackgroundColor": "#362228", "componentBackgroundColor": "#F4EEE6"},
    {"bodyBackgroundColor": "#C92C35", "componentBackgroundColor": "#044091"},
    {"bodyBackgroundColor": "#A2DDB8", "componentBackgroundColor": "#F6F2EB"},
    {"bodyBackgroundColor": "#F6F2EB", "componentBackgroundColor": "#A2DDB8"},
    {"bodyBackgroundColor": "#7F8284", "componentBackgroundColor": "#FFCE56"},
    {"bodyBackgroundColor": "#6D8158", "componentBackgroundColor": "#245776"},
    {"bodyBackgroundColor": "#245776", "componentBackgroundColor": "#6D8158"},
    {"bodyBackgroundColor": "#CEBECE", "componentBackgroundColor": "#EFF2FA"},
    {"bodyBackgroundColor": "#EFF2FA", "componentBackgroundColor": "#CEBECE"},
    {"bodyBackgroundColor": "#DCB28C", "componentBackgroundColor": "#474361"},
    {"bodyBackgroundColor": "#474361", "componentBackgroundColor": "#DCB28C"},
    {"bodyBackgroundColor": "#50543B", "componentBackgroundColor": "#FFE7B6"},
    {"bodyBackgroundColor": "#FFE7B6", "componentBackgroundColor": "#50543B"},
];

export let darkThemeArray = [
    // Material Design配色
    {"bodyBackgroundColor": "#9C27B0", "componentBackgroundColor": "#F3E5F5"},
    {"bodyBackgroundColor": "#673AB7", "componentBackgroundColor": "#EDE7F6"},
    {"bodyBackgroundColor": "#3F51B5", "componentBackgroundColor": "#E8EAF6"},
    {"bodyBackgroundColor": "#2196F3", "componentBackgroundColor": "#E3F2FD"},
    {"bodyBackgroundColor": "#03A9F4", "componentBackgroundColor": "#E1F5FE"},
    {"bodyBackgroundColor": "#00BCD4", "componentBackgroundColor": "#E0F7FA"},
    {"bodyBackgroundColor": "#009688", "componentBackgroundColor": "#E0F2F1"},
    {"bodyBackgroundColor": "#4CAF50", "componentBackgroundColor": "#E8F5E9"},
    {"bodyBackgroundColor": "#8BC34A", "componentBackgroundColor": "#F1F8E9"},
    {"bodyBackgroundColor": "#795548", "componentBackgroundColor": "#EFEBE9"},
    {"bodyBackgroundColor": "#607D8B", "componentBackgroundColor": "#ECEFF1"},
    {"bodyBackgroundColor": "#9E9E9E", "componentBackgroundColor": "#FAFAFA"},

    // 高级配色
    {"bodyBackgroundColor": "#7BAD5F", "componentBackgroundColor": "#F2EAE0"},
    {"bodyBackgroundColor": "#614F4D", "componentBackgroundColor": "#E5D7AD"},
    {"bodyBackgroundColor": "#5B3663", "componentBackgroundColor": "#FFD800"},
    {"bodyBackgroundColor": "#343130", "componentBackgroundColor": "#FF7900"},
    {"bodyBackgroundColor": "#EDB04C", "componentBackgroundColor": "#8A3C48"},
    {"bodyBackgroundColor": "#8A3C48", "componentBackgroundColor": "#EDB04C"},
    {"bodyBackgroundColor": "#A0C198", "componentBackgroundColor": "#535E4B"},
    {"bodyBackgroundColor": "#535E4B", "componentBackgroundColor": "#A0C198"},
    {"bodyBackgroundColor": "#CFA33E", "componentBackgroundColor": "#262424"},
    {"bodyBackgroundColor": "#262424", "componentBackgroundColor": "#CFA33E"},
    {"bodyBackgroundColor": "#36527D", "componentBackgroundColor": "#D23538"},
    {"bodyBackgroundColor": "#8D587E", "componentBackgroundColor": "#F7F2ED"},

    {"bodyBackgroundColor": "#4C3C36", "componentBackgroundColor": "#7CAC67"},
    {"bodyBackgroundColor": "#7CAC67", "componentBackgroundColor": "#4C3C36"},
    {"bodyBackgroundColor": "#013372", "componentBackgroundColor": "#C9AB70"},
    {"bodyBackgroundColor": "#C9AB70", "componentBackgroundColor": "#013372"},
    {"bodyBackgroundColor": "#362228", "componentBackgroundColor": "#F4EEE6"},
    {"bodyBackgroundColor": "#C92C35", "componentBackgroundColor": "#044091"},
    {"bodyBackgroundColor": "#044091", "componentBackgroundColor": "#C92C35"},
    {"bodyBackgroundColor": "#A2DDB8", "componentBackgroundColor": "#F6F2EB"},
    {"bodyBackgroundColor": "#7F8284", "componentBackgroundColor": "#FFCE56"},
    {"bodyBackgroundColor": "#6D8158", "componentBackgroundColor": "#245776"},
    {"bodyBackgroundColor": "#245776", "componentBackgroundColor": "#6D8158"},
    {"bodyBackgroundColor": "#CEBECE", "componentBackgroundColor": "#EFF2FA"},
    {"bodyBackgroundColor": "#DCB28C", "componentBackgroundColor": "#474361"},
    {"bodyBackgroundColor": "#474361", "componentBackgroundColor": "#DCB28C"},
    {"bodyBackgroundColor": "#50543B", "componentBackgroundColor": "#FFE7B6"},
];

// 默认图片
export let defaultImage: ImageDataInterface = {
    "id": "a8YKQkLOUH8",
    "created_at": "2022-08-08T19:27:42Z",
    "updated_at": "2022-08-28T10:33:48Z",
    "promoted_at": "2022-08-09T06:29:16Z",
    "width": 5882,
    "height": 3922,
    "color": "#d9d9d9",
    "blur_hash": "LBNKbX009ZV[s:WUWBofSeofWBf6",
    "description": null,
    "alt_description": null,
    "urls": {
        "raw": "https://images.unsplash.com/photo-1659986828231-49ecf659b69c?ixid=MnwzMDIwODF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjE3Nzg4MDY\u0026ixlib=rb-1.2.1",
        "full": "https://images.unsplash.com/photo-1659986828231-49ecf659b69c?crop=entropy\u0026cs=tinysrgb\u0026fm=jpg\u0026ixid=MnwzMDIwODF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjE3Nzg4MDY\u0026ixlib=rb-1.2.1\u0026q=80",
        "regular": "https://images.unsplash.com/photo-1659986828231-49ecf659b69c?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMDIwODF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjE3Nzg4MDY\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
        "small": "https://images.unsplash.com/photo-1659986828231-49ecf659b69c?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMDIwODF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjE3Nzg4MDY\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
        "thumb": "https://images.unsplash.com/photo-1659986828231-49ecf659b69c?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMDIwODF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjE3Nzg4MDY\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1659986828231-49ecf659b69c"
    },
    "links": {
        "self": "https://api.unsplash.com/photos/a8YKQkLOUH8",
        "html": "https://unsplash.com/photos/a8YKQkLOUH8",
        "download": "https://unsplash.com/photos/a8YKQkLOUH8/download?ixid=MnwzMDIwODF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjE3Nzg4MDY",
        "download_location": "https://api.unsplash.com/photos/a8YKQkLOUH8/download?ixid=MnwzMDIwODF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjE3Nzg4MDY"
    },
    "categories": [],
    "likes": 7,
    "liked_by_user": false,
    "current_user_collections": [],
    "sponsorship": null,
    "topic_submissions": {},
    "user": {
        "id": "Dfz97dEHsTo",
        "updated_at": "2022-08-28T23:15:05Z",
        "username": "lalasse",
        "name": "Lasse Møller",
        "first_name": "Lasse",
        "last_name": "Møller",
        "twitter_username": null,
        "portfolio_url": "http://gurami.studio",
        "bio": "Owner of graphic design studio, GURAMI.\r\nFree time photographer — capturing moments, feelings, structures or what ever I find interesting, sweet or cool.",
        "location": "Denmark",
        "links": {
            "self": "https://api.unsplash.com/users/lalasse",
            "html": "https://unsplash.com/@lalasse",
            "photos": "https://api.unsplash.com/users/lalasse/photos",
            "likes": "https://api.unsplash.com/users/lalasse/likes",
            "portfolio": "https://api.unsplash.com/users/lalasse/portfolio",
            "following": "https://api.unsplash.com/users/lalasse/following",
            "followers": "https://api.unsplash.com/users/lalasse/followers"
        },
        "profile_image": {
            "small": "https://images.unsplash.com/profile-fb-1537623231-509f7dea469e.jpg?ixlib=rb-1.2.1\u0026crop=faces\u0026fit=crop\u0026w=32\u0026h=32",
            "medium": "https://images.unsplash.com/profile-fb-1537623231-509f7dea469e.jpg?ixlib=rb-1.2.1\u0026crop=faces\u0026fit=crop\u0026w=64\u0026h=64",
            "large": "https://images.unsplash.com/profile-fb-1537623231-509f7dea469e.jpg?ixlib=rb-1.2.1\u0026crop=faces\u0026fit=crop\u0026w=128\u0026h=128"
        },
        "instagram_username": "la_lasse",
        "total_collections": 0,
        "total_likes": 0,
        "total_photos": 235,
        "accepted_tos": true,
        "for_hire": true,
        "social": {
            "instagram_username": "la_lasse",
            "portfolio_url": "http://gurami.studio",
            "twitter_username": null,
            "paypal_email": null
        }
    },
    "exif": {
        "make": "FUJIFILM",
        "model": "X-E3",
        "name": "FUJIFILM, X-E3",
        "exposure_time": "1/3800",
        "aperture": "1.0",
        "focal_length": "35.0",
        "iso": 200
    },
    "location": {
        "title": null,
        "name": null,
        "city": null,
        "country": null,
        "position": {"latitude": null, "longitude": null}
    },
    "views": 242381,
    "downloads": 3975
}

export let defaultFormInitialValues: FormInitialValuesInterface = {
    "displayEffectRadio": "regular",
    "dynamicEffectRadio": "all",
    "imageTopicsCheckbox": "Fzo3zuOHN6w"
}

// 常用变量
export let device = getDevice();  // 获取当前设备类型
export let clientId = "ntHZZmwZUkhiLBMvwqqzmOG29nyXSCXlX7x_i-qhVHM";
export let unsplashUrl = "?utm_source=SkyNewTab&utm_medium=referral";  // Unsplash API规范
