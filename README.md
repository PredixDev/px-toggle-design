# Toggle

Predix Experience Toggle module is a simple implementation of a toggle switch for on/off states.

## Demo

You can review toggle styles and recommended markup here: https://github.build.ge.com/pages/PXd/px-toggle-design

## Dependencies

Px's Toggle module depends on three other PXd modules:

* [px-colors-design](https://github.build.ge.com/PXd/px-colors-design)
* [px-defaults-design](https://github.build.ge.com/PXd/px-defaults-design)
* [px-helpers-design](https://github.build.ge.com/PXd/px-helpers-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save https://github.build.ge.com/PXd/px-toggle-design.git

Once installed, `@import` into your project's Sass file in its Objects layer:

    @import "../px-toggle-design/objects.toggle";

See [px-getting-started](https://github.build.ge.com/PXd/px-getting-started#a-note-about-relative-import-paths) for an explanation of the `../`

## Import once

All rulesets are wrapped in the following `@if` statement:

    @if import-once('objects.toggle') { ... }

## Usage

These flags are available and, if needed, should be set to `true` prior to importing the module:

    $inuit-enable-toggle--small
    $inuit-enable-toggle--large
    $inuit-enable-toggle--huge

The following variables are available for use in the module:

    $inuit-toggle-color
    $inuit-toggle-background
    $inuit-toggle-border
    $inuit-toggle-switch
    $inuit-toggle-switch-border
    $inuit-toggle-switch-shadow
    $inuit-toggle-background--on
    $inuit-toggle-border--on

## Options

These classes are available if the variable flags listed above are set to `true`:

* `toggle__[input|label]--[small|large|huge]`: Small, large, or huge toggles