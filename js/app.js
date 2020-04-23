/**
 * AES Lottie JSON Animation library example
 * @see https://github.com/airbnb/lottie-web
 * @copyright 2020 Loreto Parisi (loretoparisi at gmail dot com)
 * @license MIT License
 */

/**
 * Color Palette Helper
 * @author Loreto Parisi (loretoparisi at gmail dot com)
 * @copyright 2020 Loreto Parisi (loretoparisi at gmail dot com)
*/
const Palette = {

    // color name RGB list, converted from
    // http://www.w3schools.com/html/html_colornames.asp
    // with perl as
    //     perl -e 'print "var colors = {\n"; while(<>) { /(\S+)\s+\#([0-9a-z]{2})([0-9a-z]{2})([0-9a-z]{2})\s*/i or die "Failed to parse $_"; ($r,$g,$b)=(hex($2),hex($3),hex($4)); print "    '\''",lc($1),"'\'':\[$r,$g,$b\],\n" } print "};\n" '
    COLORS: {
        'aliceblue': [240, 248, 255],
        'antiquewhite': [250, 235, 215],
        'aqua': [0, 255, 255],
        'aquamarine': [127, 255, 212],
        'azure': [240, 255, 255],
        'beige': [245, 245, 220],
        'bisque': [255, 228, 196],
        'black': [0, 0, 0],
        'blanchedalmond': [255, 235, 205],
        'blue': [0, 0, 255],
        'blueviolet': [138, 43, 226],
        'brown': [165, 42, 42],
        'burlywood': [222, 184, 135],
        'cadetblue': [95, 158, 160],
        'chartreuse': [127, 255, 0],
        'chocolate': [210, 105, 30],
        'coral': [255, 127, 80],
        'cornflowerblue': [100, 149, 237],
        'cornsilk': [255, 248, 220],
        'crimson': [220, 20, 60],
        'cyan': [0, 255, 255],
        'darkblue': [0, 0, 139],
        'darkcyan': [0, 139, 139],
        'darkgoldenrod': [184, 134, 11],
        'darkgray': [169, 169, 169],
        'darkgrey': [169, 169, 169],
        'darkgreen': [0, 100, 0],
        'darkkhaki': [189, 183, 107],
        'darkmagenta': [139, 0, 139],
        'darkolivegreen': [85, 107, 47],
        'darkorange': [255, 140, 0],
        'darkorchid': [153, 50, 204],
        'darkred': [139, 0, 0],
        'darksalmon': [233, 150, 122],
        'darkseagreen': [143, 188, 143],
        'darkslateblue': [72, 61, 139],
        'darkslategray': [47, 79, 79],
        'darkslategrey': [47, 79, 79],
        'darkturquoise': [0, 206, 209],
        'darkviolet': [148, 0, 211],
        'deeppink': [255, 20, 147],
        'deepskyblue': [0, 191, 255],
        'dimgray': [105, 105, 105],
        'dimgrey': [105, 105, 105],
        'dodgerblue': [30, 144, 255],
        'firebrick': [178, 34, 34],
        'floralwhite': [255, 250, 240],
        'forestgreen': [34, 139, 34],
        'fuchsia': [255, 0, 255],
        'gainsboro': [220, 220, 220],
        'ghostwhite': [248, 248, 255],
        'gold': [255, 215, 0],
        'goldenrod': [218, 165, 32],
        'gray': [128, 128, 128],
        'grey': [128, 128, 128],
        'green': [0, 128, 0],
        'greenyellow': [173, 255, 47],
        'honeydew': [240, 255, 240],
        'hotpink': [255, 105, 180],
        'indianred': [205, 92, 92],
        'indigo': [75, 0, 130],
        'ivory': [255, 255, 240],
        'khaki': [240, 230, 140],
        'lavender': [230, 230, 250],
        'lavenderblush': [255, 240, 245],
        'lawngreen': [124, 252, 0],
        'lemonchiffon': [255, 250, 205],
        'lightblue': [173, 216, 230],
        'lightcoral': [240, 128, 128],
        'lightcyan': [224, 255, 255],
        'lightgoldenrodyellow': [250, 250, 210],
        'lightgray': [211, 211, 211],
        'lightgrey': [211, 211, 211],
        'lightgreen': [144, 238, 144],
        'lightpink': [255, 182, 193],
        'lightsalmon': [255, 160, 122],
        'lightseagreen': [32, 178, 170],
        'lightskyblue': [135, 206, 250],
        'lightslategray': [119, 136, 153],
        'lightslategrey': [119, 136, 153],
        'lightsteelblue': [176, 196, 222],
        'lightyellow': [255, 255, 224],
        'lime': [0, 255, 0],
        'limegreen': [50, 205, 50],
        'linen': [250, 240, 230],
        'magenta': [255, 0, 255],
        'maroon': [128, 0, 0],
        'mediumaquamarine': [102, 205, 170],
        'mediumblue': [0, 0, 205],
        'mediumorchid': [186, 85, 211],
        'mediumpurple': [147, 112, 216],
        'mediumseagreen': [60, 179, 113],
        'mediumslateblue': [123, 104, 238],
        'mediumspringgreen': [0, 250, 154],
        'mediumturquoise': [72, 209, 204],
        'mediumvioletred': [199, 21, 133],
        'midnightblue': [25, 25, 112],
        'mintcream': [245, 255, 250],
        'mistyrose': [255, 228, 225],
        'moccasin': [255, 228, 181],
        'navajowhite': [255, 222, 173],
        'navy': [0, 0, 128],
        'oldlace': [253, 245, 230],
        'olive': [128, 128, 0],
        'olivedrab': [107, 142, 35],
        'orange': [255, 165, 0],
        'orangered': [255, 69, 0],
        'orchid': [218, 112, 214],
        'palegoldenrod': [238, 232, 170],
        'palegreen': [152, 251, 152],
        'paleturquoise': [175, 238, 238],
        'palevioletred': [216, 112, 147],
        'papayawhip': [255, 239, 213],
        'peachpuff': [255, 218, 185],
        'peru': [205, 133, 63],
        'pink': [255, 192, 203],
        'plum': [221, 160, 221],
        'powderblue': [176, 224, 230],
        'purple': [128, 0, 128],
        'red': [255, 0, 0],
        'rosybrown': [188, 143, 143],
        'royalblue': [65, 105, 225],
        'saddlebrown': [139, 69, 19],
        'salmon': [250, 128, 114],
        'sandybrown': [244, 164, 96],
        'seagreen': [46, 139, 87],
        'seashell': [255, 245, 238],
        'sienna': [160, 82, 45],
        'silver': [192, 192, 192],
        'skyblue': [135, 206, 235],
        'slateblue': [106, 90, 205],
        'slategray': [112, 128, 144],
        'slategrey': [112, 128, 144],
        'snow': [255, 250, 250],
        'springgreen': [0, 255, 127],
        'steelblue': [70, 130, 180],
        'tan': [210, 180, 140],
        'teal': [0, 128, 128],
        'thistle': [216, 191, 216],
        'tomato': [255, 99, 71],
        'turquoise': [64, 224, 208],
        'violet': [238, 130, 238],
        'wheat': [245, 222, 179],
        'white': [255, 255, 255],
        'whitesmoke': [245, 245, 245],
        'yellow': [255, 255, 0],
        'yellowgreen': [154, 205, 50],
    },

    /**
     * Convert RGB color array [0-255,0-255,0-255] to HLS [0-1, 0-1, 0-1]
     * @param {*} rgb 
     */
    RGBtoHSL: function (rgb) {
        var r = rgb[0] / 255, g = rgb[1] / 255, b = rgb[2] / 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if (max == min) {
            h = s = 0; // achromatic
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return [h, s, l];
    },

    /**
     * Convert HLS color array [0-1, 0-1, 0-1] to RGB [0-255,0-255,0-255] 
     * @param {*} hls 
     */
    HSLtoRGB: function (hsl) {
        var h = hsl[0], s = hsl[1], l = hsl[2];

        var r, g, b;

        if (s == 0) {
            r = g = b = l; // achromatic
        } else {
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = this.HUEtoRGB(p, q, h + 1 / 3);
            g = this.HUEtoRGB(p, q, h);
            b = this.HUEtoRGB(p, q, h - 1 / 3);
        }

        return [r * 255, g * 255, b * 255];
    },

    /**
     * Get random HLS color from Palette
     */
    color: function () {
        const randomIndex = Math.floor(Math.random() * Object.keys(Palette.COLORS).length);
        const randomColor = Palette.COLORS[Object.keys(Palette.COLORS)[randomIndex]];
        return Palette.RGBtoHSL(randomColor);
    }
}//Palette

/**
 * Animation Helper
 * @author Loreto Parisi (loretoparisi at gmail dot com)
 * @copyright 2020 Loreto Parisi (loretoparisi at gmail dot com)
*/
const Animation = {
    GetAnimationIndex: function() { return 0 },
    GetData: function() {
        return [
            'data/text.json',
            'data/marble.json',
            'data/loading.json',
            'data/bouncing.json'
        ]
    },
    Update: function(anim, params) {
        var self = this;
        var options = {
            delay: 500
        }
        for (var attr in params) { options[attr] = params[attr] };

        switch (self.GetAnimationIndex()) {
            // simple TextLayer
            case 0: {
                anim.renderer.elements[0].updateDocumentData({
                    t: "White shirt now red, my bloody nose", 
                    s: 78, 
                    fc: Palette.color() 
                }, 0);
                anim.renderer.elements[0].updateDocumentData({
                    t: "Sleepin', you're on your tippy toes", 
                    s: 78, 
                    fc: Palette.color() 
                }, 1);
            } break;
            default: break;
        }

        // play animation
        console.log("lottie: play delayed");
        setTimeout(() => anim.play(), options.delay);

    },//Update
    Create: function(params) {
        var self = this;
        var options = {
            autoplay: false,
            loop: true
        }
        for (var attr in params) { options[attr] = params[attr] };

        return new Promise((resolve, reject) => {
            $.getJSON(self.GetData()[self.GetAnimationIndex()], (animationData) => {

                console.log("lottie: animationData\n", animationData);

                console.log("layers", animationData.layers);
                console.log("chars", animationData.chars);

                const elem = document.getElementById('lottie');
                const animData = {
                    container: elem,
                    renderer: 'svg',
                    loop: options.loop,
                    autoplay: options.autoplay,
                    // https://github.com/airbnb/lottie-web/wiki/Renderer-Settings
                    rendererSettings: {
                        // for svg and canvas renderer it simulates the behavior of the preserveAspectRatio property on svgs.
                        preserveAspectRatio: 'xMidYMid meet',
                        // if set to false, canvas will not be erased between frames. Useful when the canvas context is shared with the rest of the application
                        clearCanvas: false,
                        progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
                        hideOnTransparent: true //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
                    },
                    animationData: animationData
                };
                // https://github.com/airbnb/lottie-web/wiki/loadAnimation-options
                let anim = lottie.loadAnimation(animData);
                console.log("lottie: loadAnimation", anim);
                // DOMLoaded (when elements have been added to the DOM)
                anim.addEventListener('DOMLoaded', () => {
                    console.log("lottie: DOMLoaded");
                    resolve(anim);
                });
                anim.addEventListener('complete', () => {
                    console.log("lottie: complete");
                });
            })
        });
    }//Create
}//Animation

$(document).ready(function () {
    console.log(Animation)
    // create the animation from json api
    Animation.Create({ autoplay: false, loop: true })
        .then(anim => {
            // render the animation updates
            Animation.Update(anim, { delay: 250 });
        })
        .catch(error => console.error(error));
});