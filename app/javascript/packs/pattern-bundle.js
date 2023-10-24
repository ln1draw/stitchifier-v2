import ReactOnRails from 'react-on-rails';

import Pattern from '../bundles/Pattern/components/Pattern';
import Stitch from '../bundles/Stitch/components/Stitch';

// This is how react_on_rails can see the Pattern in the browser.
ReactOnRails.register({
  Pattern,
  Stitch
});
