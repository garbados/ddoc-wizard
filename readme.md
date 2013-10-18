# ddoc-wizard

Manage your database's design documents using [Grunt](http://gruntjs.com/)!

## Install

To get started, you'll need [node.js](http://nodejs.org/) installed. If you don't already have Grunt installed, you can get it by running `npm install -g grunt-cli`.

Then, to install ddoc-wizard, do this:

    git clone git@github.com:garbados/ddoc-wizard.git
    cd ddoc-wizard
    grunt init
    # answer grunt's questions to configure the wizard

Cool! You're good to go.

## Usage

The `ddocs` folder will contain your design documents, under folders named after the databases they'll go in. Check out `ddocs/examples/derp.js` for an example design doc.

In essence, it's everything you'd write on the server, but as a JavaScript object rather than raw JSON, which lets you verify its correctness more easily. Also, JavaScript is less of a pain to write than raw JSON, or at least that's my opinion.

To upload your design documents, do this:

    grunt

Our example `derp.js` will be uploaded to the `examples` database (since it's stored under the `examples` folder) as `_design/derp` since that's the `_id` value in the `derp.js` file.

## License

[MIT](http://opensource.org/licenses/MIT), yo.