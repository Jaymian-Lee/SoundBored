export const getSoundAssetsFromSlug = (slug) => {
    let image, sound

    switch (slug) {
        case 'ballsyaw':
            image = require('../../assets/images/ballsyaw.png')
            sound = require('../../assets/sounds/ballsyaw.m4a')
            break;
        case 'tableisbroken':
            image = require('../../assets/images/tableisbroken.png')
            sound = require('../../assets/sounds/tableisbroken.m4a')
            break;
        case 'counting':
            image = require('../../assets/images/counting.png')
            sound = require('../../assets/sounds/counting.m4a')
            break;
        case 'kakakola':
            image = require('../../assets/images/kakakola.png')
            sound = require('../../assets/sounds/kakakola.m4a')
            break;
        case 'salamoon':
            image = require('../../assets/images/salamoon.png')
            sound = require('../../assets/sounds/salamoon.m4a')
            break;
        case 'steaknight':
            image = require('../../assets/images/steaknight.png')
            sound = require('../../assets/sounds/steaknight.m4a')
            break;
        case 'twayx':
            image = require('../../assets/images/twayx.png')
            sound = require('../../assets/sounds/twayx.m4a')
            break;
        case 'wasteofprinjel':
            image = require('../../assets/images/wasteofprinjel.png')
            sound = require('../../assets/sounds/wasteofprinjel.m4a')
            break;
        case 'wasteofsus':
            image = require('../../assets/images/wasteofsus.png')
            sound = require('../../assets/sounds/wasteofsus.m4a')
            break;
        case 'whatsappsound':
            image = require('../../assets/images/whatsappsound.png')
            sound = require('../../assets/sounds/whatsappsound.m4a')
            break;
        case 'dolphinlaugh':
            image = require('../../assets/images/dolphinlaugh.png')
            sound = require('../../assets/sounds/dolphinlaugh.m4a')
            break;
        case 'syskill':
            image = require('../../assets/images/syskill.png')
            sound = require('../../assets/sounds/syskill.m4a')
            break;
        case 'fourtyone':
            image = require('../../assets/images/fourtyone.png')
            sound = require('../../assets/sounds/fourtyone.m4a')
            break;
        case 'beatbox':
            image = require('../../assets/images/beatbox.png')
            sound = require('../../assets/sounds/beatbox.m4a')
            break;
        case 'bitch':
            image = require('../../assets/images/bitch.png')
            sound = require('../../assets/sounds/bitch.m4a')
            break;
        case 'book':
            image = require('../../assets/images/book.png')
            sound = require('../../assets/sounds/book.m4a')
            break;
        case 'chicken':
            image = require('../../assets/images/chicken.png')
            sound = require('../../assets/sounds/chicken.m4a')
            break;
        case 'child':
            image = require('../../assets/images/child.png')
            sound = require('../../assets/sounds/child.m4a')
            break;
        case 'croissant':
            image = require('../../assets/images/croissant.png')
            sound = require('../../assets/sounds/croissant.m4a')
            break;
        case 'dishes':
            image = require('../../assets/images/dishes.png')
            sound = require('../../assets/sounds/dishes.m4a')
            break;
        case 'drama':
            image = require('../../assets/images/drama.png')
            sound = require('../../assets/sounds/drama.m4a')
            break;
        case 'freshavocado':
            image = require('../../assets/images/freshavocado.png')
            sound = require('../../assets/sounds/freshavocado.m4a')
            break;
        case 'goodp':
            image = require('../../assets/images/goodp.png')
            sound = require('../../assets/sounds/goodp.m4a')
            break;
        case 'hurricane':
            image = require('../../assets/images/hurricane.png')
            sound = require('../../assets/sounds/hurricane.m4a')
            break;
        case 'ilikethatlaugh':
            image = require('../../assets/images/ilikethatlaugh.png')
            sound = require('../../assets/sounds/ilikethatlaugh.m4a')
            break;
        case 'legitness':
            image = require('../../assets/images/legitness.png')
            sound = require('../../assets/sounds/legitness.m4a')
            break;
        case 'okayletsgo':
            image = require('../../assets/images/okayletsgo.png')
            sound = require('../../assets/sounds/okayletsgo.m4a')
            break;
        case 'paper':
            image = require('../../assets/images/paper.png')
        sound = require('../../assets/sounds/paper.m4a')
            break;
        case 'roadwork':
            image = require('../../assets/images/roadwork.png')
            sound = require('../../assets/sounds/roadwork.m4a')
            break;
        case 'watermelone':
            image = require('../../assets/images/watermelone.png')
            sound = require('../../assets/sounds/watermelone.m4a')
            break;
        case 'whatarethose':
            image = require('../../assets/images/whatarethose.png')
            sound = require('../../assets/sounds/whatarethose.m4a')
            break;
        case 'yeet':
            image = require('../../assets/images/yeet.png')
            sound = require('../../assets/sounds/yeet.m4a')
            break;
        case 'robobitch':
            image = require('../../assets/images/robobitch.png')
            sound = require('../../assets/sounds/robobitch.m4a')
            break;
        case 'tyler1':
            default:
            image = require('../../assets/images/tyler1.png')
            sound = require('../../assets/sounds/tyler1.m4a')
            break;
    }
    return {
        image,
        sound
    }
}