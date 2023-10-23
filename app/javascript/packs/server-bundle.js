import ReactOnRails from 'react-on-rails';

import Pattern from '../bundles/Pattern/components/PatternServer';

// This is how react_on_rails can see the Pattern in the browser.
ReactOnRails.register({
  Pattern,
});
