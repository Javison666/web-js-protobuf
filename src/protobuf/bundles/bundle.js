/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.test_msg = (function() {

    /**
     * Namespace test_msg.
     * @exports test_msg
     * @namespace
     */
    var test_msg = {};

    test_msg.TEST_ITEM = (function() {

        /**
         * Properties of a TEST_ITEM.
         * @memberof test_msg
         * @interface ITEST_ITEM
         * @property {number} itemId TEST_ITEM itemId
         */

        /**
         * Constructs a new TEST_ITEM.
         * @memberof test_msg
         * @classdesc Represents a TEST_ITEM.
         * @implements ITEST_ITEM
         * @constructor
         * @param {test_msg.ITEST_ITEM=} [properties] Properties to set
         */
        function TEST_ITEM(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TEST_ITEM itemId.
         * @member {number} itemId
         * @memberof test_msg.TEST_ITEM
         * @instance
         */
        TEST_ITEM.prototype.itemId = 0;

        /**
         * Creates a new TEST_ITEM instance using the specified properties.
         * @function create
         * @memberof test_msg.TEST_ITEM
         * @static
         * @param {test_msg.ITEST_ITEM=} [properties] Properties to set
         * @returns {test_msg.TEST_ITEM} TEST_ITEM instance
         */
        TEST_ITEM.create = function create(properties) {
            return new TEST_ITEM(properties);
        };

        /**
         * Encodes the specified TEST_ITEM message. Does not implicitly {@link test_msg.TEST_ITEM.verify|verify} messages.
         * @function encode
         * @memberof test_msg.TEST_ITEM
         * @static
         * @param {test_msg.ITEST_ITEM} message TEST_ITEM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TEST_ITEM.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.itemId);
            return writer;
        };

        /**
         * Encodes the specified TEST_ITEM message, length delimited. Does not implicitly {@link test_msg.TEST_ITEM.verify|verify} messages.
         * @function encodeDelimited
         * @memberof test_msg.TEST_ITEM
         * @static
         * @param {test_msg.ITEST_ITEM} message TEST_ITEM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TEST_ITEM.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TEST_ITEM message from the specified reader or buffer.
         * @function decode
         * @memberof test_msg.TEST_ITEM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {test_msg.TEST_ITEM} TEST_ITEM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TEST_ITEM.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.test_msg.TEST_ITEM();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.itemId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("itemId"))
                throw $util.ProtocolError("missing required 'itemId'", { instance: message });
            return message;
        };

        /**
         * Decodes a TEST_ITEM message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof test_msg.TEST_ITEM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {test_msg.TEST_ITEM} TEST_ITEM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TEST_ITEM.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TEST_ITEM message.
         * @function verify
         * @memberof test_msg.TEST_ITEM
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TEST_ITEM.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.itemId))
                return "itemId: integer expected";
            return null;
        };

        /**
         * Creates a TEST_ITEM message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof test_msg.TEST_ITEM
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {test_msg.TEST_ITEM} TEST_ITEM
         */
        TEST_ITEM.fromObject = function fromObject(object) {
            if (object instanceof $root.test_msg.TEST_ITEM)
                return object;
            var message = new $root.test_msg.TEST_ITEM();
            if (object.itemId != null)
                message.itemId = object.itemId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a TEST_ITEM message. Also converts values to other types if specified.
         * @function toObject
         * @memberof test_msg.TEST_ITEM
         * @static
         * @param {test_msg.TEST_ITEM} message TEST_ITEM
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TEST_ITEM.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.itemId = 0;
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            return object;
        };

        /**
         * Converts this TEST_ITEM to JSON.
         * @function toJSON
         * @memberof test_msg.TEST_ITEM
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TEST_ITEM.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TEST_ITEM;
    })();

    test_msg.TEST_LIST = (function() {

        /**
         * Properties of a TEST_LIST.
         * @memberof test_msg
         * @interface ITEST_LIST
         * @property {Array.<test_msg.ITEST_ITEM>|null} [list] TEST_LIST list
         */

        /**
         * Constructs a new TEST_LIST.
         * @memberof test_msg
         * @classdesc Represents a TEST_LIST.
         * @implements ITEST_LIST
         * @constructor
         * @param {test_msg.ITEST_LIST=} [properties] Properties to set
         */
        function TEST_LIST(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TEST_LIST list.
         * @member {Array.<test_msg.ITEST_ITEM>} list
         * @memberof test_msg.TEST_LIST
         * @instance
         */
        TEST_LIST.prototype.list = $util.emptyArray;

        /**
         * Creates a new TEST_LIST instance using the specified properties.
         * @function create
         * @memberof test_msg.TEST_LIST
         * @static
         * @param {test_msg.ITEST_LIST=} [properties] Properties to set
         * @returns {test_msg.TEST_LIST} TEST_LIST instance
         */
        TEST_LIST.create = function create(properties) {
            return new TEST_LIST(properties);
        };

        /**
         * Encodes the specified TEST_LIST message. Does not implicitly {@link test_msg.TEST_LIST.verify|verify} messages.
         * @function encode
         * @memberof test_msg.TEST_LIST
         * @static
         * @param {test_msg.ITEST_LIST} message TEST_LIST message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TEST_LIST.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.test_msg.TEST_ITEM.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TEST_LIST message, length delimited. Does not implicitly {@link test_msg.TEST_LIST.verify|verify} messages.
         * @function encodeDelimited
         * @memberof test_msg.TEST_LIST
         * @static
         * @param {test_msg.ITEST_LIST} message TEST_LIST message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TEST_LIST.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TEST_LIST message from the specified reader or buffer.
         * @function decode
         * @memberof test_msg.TEST_LIST
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {test_msg.TEST_LIST} TEST_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TEST_LIST.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.test_msg.TEST_LIST();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.test_msg.TEST_ITEM.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TEST_LIST message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof test_msg.TEST_LIST
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {test_msg.TEST_LIST} TEST_LIST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TEST_LIST.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TEST_LIST message.
         * @function verify
         * @memberof test_msg.TEST_LIST
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TEST_LIST.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.test_msg.TEST_ITEM.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TEST_LIST message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof test_msg.TEST_LIST
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {test_msg.TEST_LIST} TEST_LIST
         */
        TEST_LIST.fromObject = function fromObject(object) {
            if (object instanceof $root.test_msg.TEST_LIST)
                return object;
            var message = new $root.test_msg.TEST_LIST();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".test_msg.TEST_LIST.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".test_msg.TEST_LIST.list: object expected");
                    message.list[i] = $root.test_msg.TEST_ITEM.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TEST_LIST message. Also converts values to other types if specified.
         * @function toObject
         * @memberof test_msg.TEST_LIST
         * @static
         * @param {test_msg.TEST_LIST} message TEST_LIST
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TEST_LIST.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.test_msg.TEST_ITEM.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this TEST_LIST to JSON.
         * @function toJSON
         * @memberof test_msg.TEST_LIST
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TEST_LIST.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TEST_LIST;
    })();

    return test_msg;
})();

export default $root;
