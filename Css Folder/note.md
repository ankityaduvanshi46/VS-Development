# CSS--S > Cascading style sheet

1.) Inline CSS
    This is use inside html tags.
2.) Internal CSS
    This type CSS we use into style tags.
3.) External CSS
    We make a seprate file for it then embedd using link tag.


# Selecter In CSS
1. Universal Selecter
3. ID Selecter
2. Class Selecter
4. Element Selecter


# Casing in programming-->
1. camelCase    -->    fontSize
2. snake_case   -->    font_size
3. kebab-case   -->    font-size
4. PascalCase   -->    FontSize

# Priority Wise External CSS---->Internal CSS---->Inline CSS

<!-- -->
# used to set the size of text.
p{
    font-size:20px;
}

# Common Units:

* px(pixcels): Fixed unit, 1px equals one screen pixel. it doesn not change based o parent or screen size.
* em:Relative unit. it based on the font size of the parent element. For example, if parent font-size is 16px, then 1em = 16px.
* rem (root em): Relative unit based o the root (html) element's font size is 16px, then 1rem = 16px, regardless of parent.
* %(percentage): Relative unit based on the parent element's size. For Font-size it depends on the parents fornt size.