# px-toggle-design

The Predix UI Toggle module provides styling for a toggle component (an on/off switch). It is essentially CSS applied to a checkbox and label. 

## Dependencies

The `px-toggle-design` module depends on the following modules (automatically included with Bower install):

* [px-colors-design](https://github.com/PredixDev/px-colors-design)
* [px-defaults-design](https://github.com/PredixDev/px-defaults-design)
* [px-helpers-design](https://github.com/PredixDev/px-helpers-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save px-toggle-design

Once installed, `@import` into your project's Sass file in its Objects layer:

    @import "px-toggle-design/_objects.toggle.scss";

## Usage

These flags are available and, if needed, should be set to `true` prior to importing the module:

    $inuit-enable-toggle--small;
    $inuit-enable-toggle--large;
    $inuit-enable-toggle--huge;

The following variables are available for use in the module:

    $inuit-toggle-namespace
    $inuit-toggle__background--checked
    $inuit-toggle__background--checked--hover
    $inuit-toggle__background--checked--pressed
    $inuit-toggle__background--checked--disabled
    $inuit-toggle__background--unchecked
    $inuit-toggle__background--unchecked--hover
    $inuit-toggle__background--unchecked--pressed
    $inuit-toggle__background--unchecked--disabled
    $inuit-toggle__background-border--unchecked
    $inuit-toggle__background-border--unchecked--hover
    $inuit-toggle__background-border--unchecked--pressed
    $inuit-toggle__background-border--unchecked--disabled
    $inuit-toggle__switch
    $inuit-toggle__switch--hover
    $inuit-toggle__switch--pressed
    $inuit-toggle__switch--disabled
    $inuit-toggle__switch-border
    $inuit-toggle__switch-border--hover
    $inuit-toggle__switch-border--pressed
    $inuit-toggle__switch-border--disabled

Toggles are just fancy checkboxes. After you import the toggle library, you can add classes to an `<input>` tag and `<label>` tag to create your toggle element.

You can create a toggle with the following code:

```
<!-- HTML and CSS get the job done, no JavaScript required -->
<input id="simpleToggle" class="toggle__input" type="checkbox">
<label for="simpleToggle" class="toggle__label"></label>
```

### Important things to remember

#### Order matters (input before label)

Your `<input>` tag must come right before your `<label>` tag, exactly as the code appears in the example above. The toggle relies on CSS's adjacent sibling selector. If you don't place the tags in the right order, the toggle won't work.

#### Match your `input id` and `label for`

Your 'id' attribute on your `<input>` tag should match the 'for' attribute on your `<label>` tag to keep them in sync:

```
<!-- Input and label must have the same ID -->
<input id="SAME_VALUE" class="toggle__input" type="checkbox">
<label for="SAME_VALUE" class="toggle__label"></label>
```

#### Keep classes in sync

Both the `<input>` and `<label>` tags should have the same modifiers as their sibling. For example, if you're using a small toggle, make sure you apply the `toggle__input--small` class and the `toggle__label--small` class, as in the example below:

```
<!-- Small modifier on both input and label -->
<input id="toggle3" class="toggle__input toggle__input--small" type="checkbox">
<label for="toggle3" class="toggle__label toggle__label--small"></label>
```

### All the possible toggles

Here are all the possible toggles you could use. Remember, you'll need to set the correct flags before importing the toggle module (see instructions above):

```
<!-- Small toggle -->
<input id="small" class="toggle__input toggle__input--small" type="checkbox">
<label for="small" class="toggle__label toggle__label--small"></label>

<!-- Regular toggle -->
<input id="regular" class="toggle__input" type="checkbox">
<label for="regular" class="toggle__label"></label>

<!-- Large toggle -->
<input id="large" class="toggle__input toggle__input--large" type="checkbox">
<label for="large" class="toggle__label toggle__label--large"></label>

<!-- Huge toggle -->
<input id="huge" class="toggle__input toggle__input--huge" type="checkbox">
<label for="huge" class="toggle__label toggle__label--huge"></label>

<!-- Disabled toggle -->
<input id="disabled" class="toggle__input" type="checkbox">
<label for="disabled" class="toggle__label toggle__label--disabled"></label>
```

View the full API [here](http://predixdev.github.io/px-toggle-design/).
