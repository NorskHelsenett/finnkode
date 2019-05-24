import $ from 'jquery';
window.jQuery = $;
window.$ = $;
require('../_scss/master.scss');

require('./master/plugins');
require('./master/debounce');
require('./master/expandableBlocks');
require('./master/layoutQ');
require('./master/responsiveExpandableBlocks');
require('./master/textSizeExpander');
require('./code-system/stickyHeader');
require('./code-system/resizableSplitter');
require('./code-system/treeSlider');
require('./master/main');