----
hosts: Segun Ola,
guests: Valentino Ugbala
summarized_by: Bankole Samuel
summarized_by_social_media: https://twitter.com/bhankypsalm
----
# Understanding CSS property (part 1)


In this video, we will practically learn
- What CSS positioning does
- CSS position values (static, relative, absolute, sticky and fixed)

CSS position property help to manipulate the location of an element.
The default value of a position property is static and top, right, bottom, left, z-index do not have effect on position static.

A positioned element is any element whose position value is any other valid value apart from static.

When a div is set to position relative, it's initial position is still retained(i.e no element occupy the old position, it doesn't affect other element positioning on the page) when top, right, bottom, left is set, the element position changes but the initial space it occupies is not occupied by another element.
Value of right, left, bottom and top is calculated in relative to it's original position, the original position is considered as origin with initial TRBL of 0 and whatever you change the value of TRBL is calculated from there

With position absolute the element initial space it occupies is removed, absolute positioning is positioned relative to the closest position ancestor(parent/containing element)
when an element is set to position absolute, it keeps looking up the tree for an element that is a positioned element. It is relatively positioned with the set closest parent element positioning and doesn't mind others above it.

Position fixed is positioned relative to an initial containing block which is our viewport, it is like position absolute that only cares about the viewport.

I hope you find it helpful and you enjoy the video
