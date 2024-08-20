const beforeResponse = JSON.parse(typeof $response !="undefined" && $response.body ||null);

beforeResponse.data.vip_expires = 2555942400;
beforeResponse.data.is_vip = 1;
beforeResponse.data.point_expires = 2555942400;
beforeResponse.data.sound_expires = 2555942400;
beforeResponse.data.is_sound = 1;

beforeResponse.data.visitor.vip_expires = 2555942400;
beforeResponse.data.visitor.is_vip = 1;
beforeResponse.data.visitor.have_vip = 5;
beforeResponse.data.visitor.sound.is_sound = 1;
beforeResponse.data.visitor.sound.have_sound = 99;
beforeResponse.data.visitor.sound.sound_expires = 2555942400;
beforeResponse.data.visitor.baby.is_baby = 1;
beforeResponse.data.visitor.baby.have_baby = 99;
beforeResponse.data.visitor.baby.baby_expires = 2555942400;
beforeResponse.data.visitor.have_vip = 5;
beforeResponse.data.visitor.point_expires = 2555942400;
beforeResponse.data.sound.is_sound = 1;
beforeResponse.data.sound.sound_expires = 2555942400;
beforeResponse.data.sound.have_sound = 99;
beforeResponse.data.baby.is_baby = 1;
beforeResponse.data.baby.have_baby = 99;
beforeResponse.data.baby.baby_expires = 2555942400;

afterResponse.headers = $response.headers;
afterResponse.body = beforeResponse;

$done(afterResponse);