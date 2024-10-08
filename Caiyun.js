const chxm1024 = {};
const chxm1023 = JSON.parse(typeof $response != "undefined" && $response.body || null);
const url = $request.url;
const adUrl = /(activity\?app_name|operation\/banners)/;
const vipUrl = /https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/p\/v\d\/vip_info/;
const userUrl = /https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/v\d\/user\?app_name/;
const infoUrl = /https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/p\/v\d\/user_info/;
const aiUrl = /ai\/weather\/quotas/;
const qyUrl = /entries/;
const peUrl = /privileges/;
const topUrl = /operation\/homefeatures/;

if (typeof $response == "undefined") {
    chxm1024.headers = $request.headers;
    chxm1024.headers['device-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uIjoiNjViYzc1NzAwYTBkNTYwMDFiZmJkODhjIiwidXNlcl9pZCI6IjVmODNhMDY3MTk5NzZmMDAxNWEyNTRiNiIsInZlcnNpb24iOjIsImV4cCI6MTcwOTQ4MjAwMCwidmlwX2V4cGlyZWRfYXQiOjAsImlzcyI6IndlYXRoZXIiLCJpYXQiOjE3MDY4OTAwMDAsInN2aXBfZXhwaXJlZF9hdCI6MTcxNDMyMTgxMiwicHJpbWFyeSI6dHJ1ZX0.v41eOWgj4FmMMYLygupRLeE2hC8KW_HltSsdFk03oP4';
} else {
    switch (true) {
        case adUrl.test(url):
            chxm1023.status = "ok";
            chxm1023.activities = [{ "items": [{}] }];
            chxm1023.data = [];
            break;
        case vipUrl.test(url):
            chxm1023.vip = {
                ...chxm1023.vip,
                "expires_time": "4092599349", "is_auto_renewal": true
            };
            chxm1023.svip = { ...chxm1023.svip, "expires_time": "4092599349", "is_auto_renewal": true };
            chxm1023.show_upcoming_renewal = false;
            break;
        case userUrl.test(url):
            chxm1023.result = { ...chxm1023.result, is_vip: true, vip_expired_at: 4092599349, svip_given: 1, is_xy_vip: true, xy_svip_expire: 4092599349, wt: { ...chxm1023.result.wt, vip: { ...chxm1023.result.wt.vip, "expired_at": 0, "enabled": true, "svip_apple_expired_at": 4092599349, "is_auto_renewal": true, "svip_expired_at": 4092599349 }, svip_given: 1, }, is_phone_verified: true, vip_take_effect: 1, is_primary: true, xy_vip_expire: 4092599349, svip_expired_at: 4092599349, svip_take_effect: 1, vip_type: "s", };
            break;
        case infoUrl.test(url):
            chxm1023["reg_days"] = 99999;
            break;
        case aiUrl.test(url):
            chxm1023.remain = 999;
            chxm1023.subscription_remain = 999;
            chxm1023.subscription_quota = 999;
            chxm1023.addition_remain = 999;
            chxm1023.subscription_quota_end_time = 4092599349;
            chxm1023.free_remain = 999;
            chxm1023.free_quota = 999;
            break;
        case qyUrl.test(url):
            chxm1023["entries"] = [{ "url": "https://t.me/chxm1023", "id": 1, "name": "叮当猫", "type": 1, "pos": 2 }];
            break;
        case peUrl.test(url):
            chxm1023["privileges"] = [{ "vip_type": "svip", "subscription_chat_quota": 999 }];
            break;
        case topUrl.test(url):
            chxm1023["data"] = [{ "badge_type": "", "title": "叮当猫", "url": "https://t.me/chxm1023", "feature_type": "", "avatar": "https://raw.githubusercontent.com/chxm1023/Script_X/main/icon/ddm2.png" }, ...chxm1023.data];
            break;
    }
    chxm1024.body = JSON.stringify(chxm1023);
}

$done(chxm1024);