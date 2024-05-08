---
slug: BreadCrumb
title: Tailwind CSS BreadCrumb
description: Displays the path to the current resource using a hierarchy of links.
component: true
---

<script>
    import { ComponentPreview } from '$lib/components/docs';
</script>

<h2>Basic Breadcrumb Usage</h2>
<p>basic use</p>
<ComponentPreview type="breadcrumb" name="breadcrumb" >

<div />

</ComponentPreview>

<h2>Custom separator</h2>
<p>Use a custom component in the "slot" of "Breadcrumb.Separator" to create a custom separator.</p>
<ComponentPreview type="breadcrumb" name="breadcrumb-separator" >

<div />

</ComponentPreview>


<h2>With Dropdown</h2>
<p>You can compose "Breadcrumb.Item" with a "DropdownMenu" to create a dropdown in the breadcrumb.</p>
<ComponentPreview type="breadcrumb" name="breadcrumb-dropdown" >

<div />

</ComponentPreview>

<h2>Collapse</h2>
<p>We provide a "Breadcrumb.Ellipsis" component to show a collapsed state when the breadcrumb is too long.</p>
<ComponentPreview type="breadcrumb" name="breadcrumb-collapse" >

<div />

</ComponentPreview>

<h2>Link component</h2>
<p>To use a custom link component from your routing library, you can use the asChild prop on "Breadcrumb.Link".</p>
<ComponentPreview type="breadcrumb" name="breadcrumb-link" >

<div />

</ComponentPreview>

<h2>Responsive</h2>
<p>Here's an example of a responsive breadcrumb that composes "Breadcrumb.Item" with "Breadcrumb.Ellipsis", "DropdownMenu", and "Drawer"..</p>
<ComponentPreview type="breadcrumb" name="breadcrumb-responsive" >

<div />

</ComponentPreview>