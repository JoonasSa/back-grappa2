const personService = require('../services/PersonService');
const roleService = require('../services/RoleService');

//Used with Shibboleth
export async function login(req, res) {
    const headers = req.headers;
    console.log("HEADERS START\n", headers, "\nHEADERS END");
    let user = undefined;
    //This will do the magic to log a person in.
    //Get person with shibbolethid??
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(500);
    }
}

//Used without shibboleth
export async function fakeLogin(req, res) {
    const shibbolethId = req.params.id;
    console.log("Faking login with " + shibbolethId);
    try {
        const persons = await personService.getPersonByShibbolethId(shibbolethId);
        let user = persons[0]
        const roles = await roleService.getPersonRoles(user.personId);
        user.roles = roles;
        res.status(200).json(user);
    } catch (err) {
        res.status(500);
    }
}