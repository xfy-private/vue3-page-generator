import SvgIcon from './index.vue';

type args = {
  keys: () => {
    map: (_arg: args) => void
  }
}

const req = require.context('./../svg', false, /\.svg$/) as unknown as args;

const requireAll = (requireContext: args) => requireContext.keys().map(requireContext);

requireAll(req);

export default SvgIcon;
