"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const humanitarian_aids_controller_1 = require("../controllers/humanitarian-aids.controller");
/**
 * @swagger
 * components:
 *  schemas:
 *    humanitarianAid:
 *      type: object
 *      properties:
 *        year:
 *          type: string
 *          description: the year where the aid was carred on
 *        ngo:
 *          type: string
 *          description: donnor organization
 *        aid:
 *          type: string
 *          description: the total aid that the ngo was given to Sudan
 *      required:
 *        - year
 *        - ngo
 *        - aid
 *      example:
 *        year: 2011
 *        ngo: Sida
 *        aid: 181469583
 *    humaniarianAidNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found humanitarianAid
 *      example:
 *        msg: HumanitarianAid was not found
 *
 *  parameters:
 *    taskId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: the task id
 */
/**
 * @swagger
 * /api/humanitarian-data:
 *  get:
 *    summary: Return a list of monetary aid sent to Sudan
 *    tags: [Humanitarian aid]
 *    responses:
 *      200:
 *        description: list of monetary aid sent to Sudan
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/humanitarianAid'
 */
router.get('/humanitarian-data', humanitarian_aids_controller_1.humanitarianAidsController.index);
exports.default = router;
