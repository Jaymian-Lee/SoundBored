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
        default:
            image = require('../../assets/images/beatbox.png')
            sound = require('../../assets/sounds/beatbox.m4a')
            break;
    }

    return {
        image,
        sound
    }
}