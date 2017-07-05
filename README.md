# Bulma Shortcodes
This plugin adds a collection of WordPress shortcodes for [Bulma](http://bulma.io/) components.

## Installation
Download this repository as a zip file and upload to WordPress. Additionally, you must include Bulma in your CSS files in order for these shortcodes to work.

## Usage
The easiest way to add shortcodes is through the Bulma dropdown in the WordPress editor. Alternatively, you can manually type out the shortcodes.

### Columns
Columns are used to create a responsive grid:

```
[bulma-columns]
[bulma-column]
Your content...
[/bulma-column]
[bulma-column]
Your content...
[/bulma-column]
[/bulma-columns]
```

The `[bulma-column]` shortcode accepts a type argument:

```
[bulma-column type="is-8"][/bulma-column]
```

Due to limitations within the WordPress shortcode system, nesting identical shortcodes will break. To work around this, there are additional shortcodes you can use that will also produce columns:

```
// Will break
[bulma-columns]
	[bulma-column]
		[bulma-columns]
			[bulma-column][/bulma-column]
			[bulma-column][/bulma-column]
		[/bulma-columns]
	[/bulma-column]
	[bulma-column]
		[bulma-columns]
			[bulma-column][/bulma-column]
			[bulma-column][/bulma-column]
		[/bulma-columns]
	[/bulma-column]
[/bulma-columns]

// Will Work
[bulma-columns]
	[bulma-column]
		[bulma-columns-1]
			[bulma-column-1][/bulma-column-1]
			[bulma-column-1][/bulma-column-1]
		[/bulma-columns-1]
	[/bulma-column]
	[bulma-column]
		[bulma-columns-1]
			[bulma-column-1][/bulma-column-1]
			[bulma-column-1][/bulma-column-1]
		[/bulma-columns-1]
	[/bulma-column]
[/bulma-columns]
```

You can nest up to five levels deep with this system (column, column-1, column-2, column-3, column-4).

### Button
Creates the tag `<a href="#" class="button">Your Content</a>`.

Accepts three arguments:

|Arg.|Accepts|Default|
|---|---|---|
|type|class names (is-primary)|is-primary|
|link|string (url)|#|
|icon|valid [font-awesome](http://fontawesome.io/) icon names|null|

Ex: `[bulma-button type="is-primary" link="www.example.com" icon="github"]Star on GitHub[/bulma-button]`.

### Icon
Creates the tag `<span class="icon"><i class="fa fa-<icon name>></i></span>"`.

Accepts two arguments:

|Arg.|Accepts|Default|
|---|---|---|
|type|class names (is-primary)|is-primary|
|icon|valid [font-awesome](http://fontawesome.io/) icon names|null|

### Box
Adds a Bulma box element.

Accepts one argument, type. Defaults to NOT full-width box as this element in WordPress is mostly helpful for adding emphasis to an item like a photo. If type is set to full-width, it'll behave like a normal Bulma box.

Ex:

```
// NOT full-width
[bulma-box]Your content...[/bulma-box]

// Full-width
[bulma-box type="full-width"]Your Content...[/bulma-box]
```

### Notification
Adds a Bulma notification element.

Accepts one argument, type.

Ex: `[bulma-notification type="is-primary"]Alert[/bulma-notification]`

### Card
Creates a Bulma Card element. This shortcode has several child codes:

```
[bulma-card]
[bulma-card-header][/culma-card-header]
[bulma-card-content][/bulma-card-content]
[bulma-card-footer][/bulma-card-footer]
[/bulma-card]
```

None of the shortcodes accept arguments.

`[bulma-card-footer]` can be given multiple footer items:

```
[bulma-card-footer]Item1|Item2|Item3[/bulma-card-footer]

// Will generate:

<footer class="card-footer">
	<div class="card-footer-item">
		Item1
	</div>
	<div class="card-footer-item">
		Item2
	</div>
	<div class="card-footer-item">
		Item3
	</div>
</footer>
```

### Menu
Creates a Bulma menu.

Ex:

```
[bulma-menu]
[bulma-menu-label]Label[/bulma-menu-label]
[bulma-menu-list]<a href="#">Item1</a>|<a href="#">Item2</a>[/bulma-menu-list]
[/bulma-menu]
```
