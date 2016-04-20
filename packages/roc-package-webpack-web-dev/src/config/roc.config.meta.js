import {
    isString,
    isBoolean,
    isPath,
    isArray,
    isInteger,
    oneOf
} from 'roc/validators';

const meta = {
    settings: {
        descriptions: {
            build: {
                resources: 'An array of files to include into the build process.'
            },
            dev: {
                devMiddleware: {
                    noInfo: 'If no info should be sent to the console.',
                    quiet: 'If nothing should be sent to the console.',
                    poll: 'If polling should be enabled. [https://github.com/webpack/watchpack#api]',
                    aggregateTimeout: 'Fire aggregated events. [https://github.com/webpack/watchpack#api]'
                },
                hotMiddleware: {
                    reload: 'If the browser should be reloaded if it fails to hot update the code.',
                    overlay: 'If a overlay should be shown when an error has occurred.',
                    noInfo: 'If no info should be sent to the console.',
                    quiet: 'If nothing should be sent to the console.'
                }
            }
        },

        validations: {
            build: {
                resources: isArray(isPath),
                targets: /web/
            },
            dev: {
                debug: isString,
                devMiddleware: {
                    noInfo: isBoolean,
                    quiet: isBoolean,
                    poll: oneOf(isBoolean, isString),
                    aggregateTimeout: isInteger
                },
                hotMiddleware: {
                    reload: isBoolean,
                    overlay: isBoolean,
                    noInfo: isBoolean,
                    quiet: isBoolean
                }
            }
        }
    }
};

/**
 * Exports the `roc.config.meta.js`.
 *
 * @return {object} The `roc.config.meta.js`.
 */
export default meta;
