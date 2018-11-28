import { DirectiveFunction } from 'vue';

const MapleThemeDirective: DirectiveFunction = (el, binding, vnode, oldnode) => {
    const arg = binding.arg;
    const value = binding.value;
    const modifiers = binding.modifiers;

    const modifiersKeys = Object.keys(modifiers);

    switch (arg) {
        case 'color': {
            let color = '';
            (value === 0 || value === 'whiteness') && (color = 'whiteness');
            (value === 1 || value === 'primary' || value === undefined) && (color = 'primary');
            (value === 2 || value === 'secondary') && (color = 'secondary');
            (value === 3 || value === 'thirdly') && (color = 'thirdly');

            (value === 12 || value === 'main-pale') && (color = 'main-pale');
            (value === 15 || value === 'main') && (color = 'main');
            (value === 18 || value === 'main-deep') && (color = 'main-deep');

            (value === 22 || value === 'accent-pale') && (color = 'accent-pale');
            (value === 25 || value === 'accent') && (color = 'accent');
            (value === 28 || value === 'accent-deep') && (color = 'accent-deep');

            (value === 200 || value === 'success') && (color = 'success');
            (value === 300 || value === 'warning') && (color = 'warning');
            (value === 400 || value === 'error') && (color = 'error');

            let pseudo = '';
            modifiersKeys.indexOf('hover') >= 0 && (pseudo = 'hover-');
            modifiersKeys.indexOf('active') >= 0 && (pseudo = 'active-');

            el.classList.add(`mp-theme-color-${pseudo}${color}`);
            break;
        }

        case 'background': {
            let backgroundColor = '';

            (value === -1 || value === 'floor') && (backgroundColor = 'floor');
            (value === 0 || value === 'panel') && (backgroundColor = 'panel');
            (value === 1 || value === 'component' || value === undefined) && (backgroundColor = 'component');

            (value === 12 || value === 'main-pale') && (backgroundColor = 'main-pale');
            (value === 15 || value === 'main') && (backgroundColor = 'main');
            (value === 18 || value === 'main-deep') && (backgroundColor = 'main-deep');

            (value === 22 || value === 'accent-pale') && (backgroundColor = 'accent-pale');
            (value === 25 || value === 'accent') && (backgroundColor = 'accent');
            (value === 28 || value === 'accent-deep') && (backgroundColor = 'accent-deep');

            (value === 30 || value === 'highlight-pale') && (backgroundColor = 'highlight-pale');
            (value === 31 || value === 'highlight') && (backgroundColor = 'highlight');

            (value === 40 || value === 'cloak') && (backgroundColor = 'cloak');

            (value === 200 || value === 'success') && (backgroundColor = 'success');
            (value === 300 || value === 'warning') && (backgroundColor = 'warning');
            (value === 400 || value === 'error') && (backgroundColor = 'error');

            let pseudo = '';
            modifiersKeys.indexOf('hover') >= 0 && (pseudo = 'hover-');
            modifiersKeys.indexOf('active') >= 0 && (pseudo = 'active-');

            el.classList.add(`mp-theme-background-${pseudo}${backgroundColor}`);
            break;
        }

        case 'border': {
            let positions = [];

            if (modifiersKeys.indexOf('all') >= 0) {
                positions.push('all');
            } else {
                let positionFlag = false;
                for (let item of ['top', 'right', 'bottom', 'left']) {
                    if (modifiersKeys.indexOf(item) >= 0) {
                        positions.push(item);
                        positionFlag = true;
                    }
                }
                //若mod中未标记位置，则默认为下边框
                !positionFlag && positions.push('bottom');
            }

            let notLast = '';
            modifiersKeys.indexOf('not-last') >= 0 && (notLast = '-not-last');

            let borderType = 'solid';
            modifiersKeys.indexOf('dashed') >= 0 && (borderType = 'dashed');
            modifiersKeys.indexOf('dotted') >= 0 && (borderType = 'dotted');

            for (let position of positions) {
                el.classList.add(`mp-theme-border-default-${position}-${borderType}${notLast}`);
            }

            break;
        }

        case 'shadow': {
            let level = 0;
            for (let item of [1, 2, 3, 4, 5]) {
                value === item && (level = value);
            }
            if (value === undefined) {
                level = 1;
            }

            let pseudo = '';
            Object.keys(modifiers).indexOf('hover') >= 0 && (pseudo = 'hover-');
            Object.keys(modifiers).indexOf('active') >= 0 && (pseudo = 'active-');

            let filter = '';
            Object.keys(modifiers).indexOf('filter') >= 0 && (filter = '-filter');

            level && el.classList.add(`mp-theme-shadow-${pseudo}${level}${filter}`);
            break;
        }
    }
};

export default MapleThemeDirective;
