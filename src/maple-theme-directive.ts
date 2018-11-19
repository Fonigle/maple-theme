import { DirectiveFunction } from 'vue';

const theme: DirectiveFunction = (el, binding, vnode, oldnode) => {
    const arg = binding.arg;
    const value = binding.value;
    const modifiers = binding.modifiers;

    switch (arg) {
        case 'color': {
            let color = '';
            (value === 0 || value === 'white') && (color = 'white');
            (value === 1 || value === 'primary' || value === undefined) && (color = 'primary');
            (value === 2 || value === 'secondary') && (color = 'secondary');
            (value === 3 || value === 'thirdly') && (color = 'thirdly');

            (value === 10 || value === 'main-pale') && (color = 'main-pale');
            (value === 11 || value === 'main') && (color = 'main');
            (value === 12 || value === 'main-deep') && (color = 'main-deep');

            (value === 20 || value === 'accent-pale') && (color = 'accent-pale');
            (value === 21 || value === 'accent') && (color = 'accent');
            (value === 22 || value === 'accent-deep') && (color = 'accent-deep');

            (value === 200 || value === 'success') && (color = 'success');
            (value === 300 || value === 'warn') && (color = 'warn');
            (value === 400 || value === 'error') && (color = 'error');

            let pseudo = '';
            Object.keys(modifiers).indexOf('hover') >= 0 && (pseudo = 'hover-');
            Object.keys(modifiers).indexOf('active') >= 0 && (pseudo = 'active-');

            el.classList.add(`mp-theme-color-${pseudo}${color}`);
            break;
        }

        case 'background': {
            let backgroundColor = '';

            (value === -1 || value === 'floor') && (backgroundColor = 'floor');
            (value === 0 || value === 'panel') && (backgroundColor = 'panel');
            (value === 1 || value === 'component' || value === undefined) && (backgroundColor = 'component');

            (value === 10 || value === 'main-pale') && (backgroundColor = 'main-pale');
            (value === 11 || value === 'main') && (backgroundColor = 'main');
            (value === 12 || value === 'main-deep') && (backgroundColor = 'main-deep');

            (value === 20 || value === 'accent-pale') && (backgroundColor = 'accent-pale');
            (value === 21 || value === 'accent') && (backgroundColor = 'accent');
            (value === 22 || value === 'accent-deep') && (backgroundColor = 'accent-deep');

            (value === 30 || value === 'highlight-pale') && (backgroundColor = 'highlight-pale');
            (value === 31 || value === 'highlight') && (backgroundColor = 'highlight');

            (value === 40 || value === 'cloak') && (backgroundColor = 'cloak');

            (value === 200 || value === 'success') && (backgroundColor = 'success');
            (value === 300 || value === 'warn') && (backgroundColor = 'warn');
            (value === 400 || value === 'error') && (backgroundColor = 'error');

            let pseudo = '';
            Object.keys(modifiers).indexOf('hover') >= 0 && (pseudo = 'hover-');
            Object.keys(modifiers).indexOf('active') >= 0 && (pseudo = 'active-');

            el.classList.add(`mp-theme-background-${pseudo}${backgroundColor}`);
            break;
        }
    }
};

export default theme;
