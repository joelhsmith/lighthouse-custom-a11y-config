/**
 * Custom config file for running A11y audits in Lighthouse.
 * Work in progress
 */
module.exports = {
  passes: [{
    recordTrace: true,
    pauseAfterLoadMs: 5000,
    useThrottling: true,
    gatherers: [
      'runtime-exceptions',
      'chrome-console-messages',
      'accessibility',
      'viewport',
      'seo/font-size',
      'fonts',
    ],
  }],
  audits: [
    'errors-in-console',
    'accessibility/accesskeys',
    'accessibility/button-name',
    'accessibility/bypass',
    'accessibility/color-contrast',
    'accessibility/document-title',
    'accessibility/duplicate-id',
    'accessibility/frame-title',
    'accessibility/html-has-lang',
    'accessibility/html-lang-valid',
    'accessibility/image-alt',
    'accessibility/input-image-alt',
    'accessibility/label',
    'accessibility/valid-lang',
    'accessibility/manual/focus-traps',
    'accessibility/manual/focusable-controls',
    'accessibility/manual/heading-levels',
    'accessibility/manual/managed-focus',
    'accessibility/manual/use-landmarks',
    'accessibility/manual/visual-order-follows-dom',
    'manual/pwa-cross-browser',
    'seo/font-size',
    'font-display',
  ],
  groups: {
    'a11y-color-contrast': {
      title: 'Color Contrast Is Satisfactory',
      description: 'These are opportunities to improve the legibility of your content.',
    },
    'a11y-describe-contents': {
      title: 'Elements Describe Contents Well',
      description: 'These are opportunities to make your content easier to understand for a user of assistive technology, like a screen reader.',
    },
    'a11y-well-structured': {
      title: 'Elements Are Well Structured',
      description: 'These are opportunities to make sure your HTML is appropriately structured.',
    },
    'a11y-language': {
      title: 'Page Specifies Valid Language',
      description: 'These are opportunities to improve the interpretation of your content by users in different locales.',
    },
    'a11y-correct-attributes': {
      title: 'Elements Use Attributes Correctly',
      description: 'These are opportunities to improve the configuration of your HTML elements.',
    },
    'a11y-element-names': {
      title: 'Elements Have Discernible Names',
      description: 'These are opportunities to improve the semantics of the controls in your application. This may enhanye the experienye for users of assistive technology, like a screen reader.',
    },
    'a11y-manual-checks': {
      title: 'Manual Checks',
      description: 'Lorem ipsem.',
    },
    'robust': {
      title: 'Robust',
      description: 'Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.',
    },
    'legible': {
      title: 'Adequate Font Sizes',
      description: 'Small text is harder to read. Links in small text results in small touch and pointer targets, which make it hard for people to click links and navigate the website. [Learn more](https://material.io/design/usability/accessibility.html#layout-typography).',
    },
  },
  categories: {
    'accessibility': {
      title: 'Accessibility',
      description: 'These checks highlight opportunities to [improve the accessibility of your web app](https://developers.google.com/web/fundamentals/accessibility). Only a subset of accessibility issues can be automatically detected so manual testing is also encouraged.',
      manualDescription: 'These items address areas which an automated testing tool cannot cover. Learn more in our guide on [conducting an accessibility review](https://developers.google.com/web/fundamentals/accessibility/how-to-review).',
      auditRefs: [
        {id: 'accesskeys', weight: 1, group: 'a11y-correct-attributes'},
        {id: 'button-name', weight: 10, group: 'a11y-element-names'},
        {id: 'bypass', weight: 10, group: 'a11y-describe-contents'},
        {id: 'color-contrast', weight: 6, group: 'a11y-color-contrast'},
        {id: 'document-title', weight: 2, group: 'a11y-describe-contents'},
        {id: 'duplicate-id', weight: 5, group: 'a11y-well-structured'},
        {id: 'frame-title', weight: 5, group: 'a11y-describe-contents'},
        {id: 'html-has-lang', weight: 4, group: 'a11y-language'},
        {id: 'html-lang-valid', weight: 1, group: 'a11y-language'},
        {id: 'image-alt', weight: 8, group: 'a11y-correct-attributes'},
        {id: 'input-image-alt', weight: 1, group: 'a11y-correct-attributes'},
        {id: 'label', weight: 10, group: 'a11y-describe-contents'},
        {id: 'valid-lang', weight: 1, group: 'a11y-language'},
        {id: 'errors-in-console', weight: 1, group: 'robust'},
        {id: 'font-size', weight: 0, group: 'legible'},
        // Manual audits
        {id: 'focusable-controls', weight: 0, group: 'a11y-manual-checks'},
        {id: 'managed-focus', weight: 0, group: 'a11y-manual-checks'},
        {id: 'focus-traps', weight: 0, group: 'a11y-manual-checks'},
        {id: 'visual-order-follows-dom', weight: 0, group: 'a11y-manual-checks'},
        {id: 'heading-levels', weight: 0, group: 'a11y-manual-checks'},
        {id: 'use-landmarks', weight: 0, group: 'a11y-manual-checks'},
        {id: 'pwa-cross-browser', weight: 0, group: 'robust'},
      ],
    },
  },
};