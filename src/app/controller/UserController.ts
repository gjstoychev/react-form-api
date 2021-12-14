import { DefaultContext } from 'koa';

export default class UserController {

     /**
     * @swagger
     * /api/user:
     *  post:
     *      tags:
     *          - User
     *      summary: Sends user form to server
     *      responses:
     *          200:
     *              description: success
     *              content:
     *                  application/plain:
     *                      schema:
     *                          type: string
     *                      example:
     *                          success
     *          422:
     *              description: Unprocessable Entity
     *              content:
     *                  application/plain:
     *                      schema:
     *                          type: object
     *                      example:
     *                          error: Invalid input validation
     */

    public static async post(ctx: DefaultContext) {
        const { first_name, last_name } = ctx.request.body;

        if (!first_name
            || !last_name
            || first_name.length < 5
            || last_name.length < 5
        ) {
            ctx.response.status = 422;
            ctx.body = { error: 'Invalid input validation' }
            return;
        }

        ctx.body = 'success';
        ctx.response.status = 200;
    }

}
