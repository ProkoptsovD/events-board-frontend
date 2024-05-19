## How run the project

#### STEP 1

1. Install project's dependencies by running `npm install`
2. Create file `.env` and copy/paste all from `.env.example` file to it. Or just rename `.env.example` to `.env`. Those env variable are needed for db connection. Of course, normally you do not store them on GitHub, but as it test project I put envs to `.env.example` file.

#### STEP 2

1. For development run `npm run dev`.

If you want to see how app works in production mode, then:

1. Stop dev server if was previously run
2. Run command `npm run build`
3. Run command `npm run start`

Happy coding!
