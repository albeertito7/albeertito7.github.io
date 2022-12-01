# albeertito7.github.io

.
├── _config.yml
├── _data
│   └── members.yml
├── _drafts
│   ├── begin-with-the-crazy-ideas.md
│   └── on-simplicity-in-technology.md
├── _includes
│   ├── footer.html
│   └── header.html
├── _layouts
│   ├── default.html
│   └── post.html
├── _posts
│   ├── 2007-10-29-why-every-programmer-should-play-nethack.md
│   └── 2009-04-26-barcamp-boston-4-roundup.md
├── _sass
│   ├── _base.scss
│   └── _layout.scss
├── _site
├── .jekyll-cache
│   └── Jekyll
│       └── Cache
│           └── [...]
├── .jekyll-metadata
└── index.html # can also be an 'index.md' with valid front matte r


_config.yml => Stores configuration data. Many of these options can be specified from the command line executable but it's easier to specify them here so you don't have to remember them.

_drafts => Drafts are unpublished posts. The format of these files is without a data: title.MARKUP. Learn how to work with drafts.

_includes => These are the partials that can be mixed and matched by your layouts and posts to facilitate reuse. The liquid tag {$ include file.ext %} can be used to include the partial _includes/file.ext

_layouts => These are the templates that wrap posts. Layouts are chosen on a post-by-post basis in the front matter, which is described in the next section. The liquit tag {{ content }} is used to inject content into the web page.

_posts => Your dynamic content, so to speak. The naming convention of these files is important, and must follow the format: YEAR-MONTH-DAY-title.MARKUP . The permalinks can be customized for each post, but the date and markup language are determined solely by the file name.

_data => Well-formatted site data should be placed here. The Jekyll engine will autoload all data files (using either the .yml, .yaml, .json, .csv or .tsv formats and extensions) in this directory, and they will be accessible via `site.data`. If there's file members.yml under the directory, then you can access contents of the file through site.data.members .

_sass => These are sass partials that can be imported into your main.scss which will then be processed into a single stylesheet main.css that defines the styles to be used by your site.

_site => This is where the generated site will be placed (by default) once Jekyll is done transforming it. It's probably a good idea to add this to your .gitignore file.

.jekyll-cache => Keeps a copy of the generated pages and markup (e.g.: markdown) for faster serving. Created when using e.g.: jekyll serve. Can be disabled with an option and/or flag. This directory will not be included in the generated site. It's probably a good idea to add this to your .gitignore file.

.jekyll-metadata => This helps Jekyll keep track of which files have not been modified since the site was last built, and which files will need to be regenerated on the next build. Only created when using incremental regeneration (e.g.: with jekyll serve -I). This file will not be included in the generated site. It's probably a good idea to add this to your .gitignore file.

index.html or index.md => Provided that the file has a front matter section, it will be transformed by Jekyll. The same will happen for any .html, .markdown, .md, or .textile file in your site's root directory or directories not listed above.


## Getting Started

get into your machine a compatible Ruby version,
and a compatbile version of Bundler.

run `bundle`, to download all the gems into your local machine.
run `bundle jekyll exec serve` to compile and execute the site.