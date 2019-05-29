window.LiveReloadOptions = { host: 'localhost' };
require('livereload-js');

require('./master/plugins');
require('./master/debounce');
require('./master/expandableBlocks');
require('./master/layoutQ');
require('./master/responsiveExpandableBlocks');
require('./master/textSizeExpander');
require('./master/main');