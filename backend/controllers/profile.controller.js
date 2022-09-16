import profileService from '../services/profile.service.js';

async function registerProfile(req, res, next) {
  try {
    // console.log('req.body.aboutYouLanguage: ', req.body.aboutYouLanguage);
    // let aboutYouLanguage = req.body.aboutYouLanguage;
    const aboutYouLanguage = req.body.aboutYouLanguage.language.map(
      (userLanguage) => ({
        userId: req.body.aboutYouPi.id,
        name: userLanguage.text,
        level: userLanguage.rating,
      })
    );
    // console.log('aboutYouLanguage: ', aboutYouLanguage);

    const profile = {
      aboutYouPi: req.body.aboutYouPi,
      aboutYouCareer: req.body.aboutYouCareer,
      aboutYouLanguage: aboutYouLanguage,
      jobExperience: req.body.jobExperience,
      skills: req.body.skills,
    };

    console.log('controller - registerProfile');
    // console.log('profile: ', profile);

    const createdProfile = await profileService.registerProfile(profile);
    res.send({ message: 'New Profile Created', profile: createdProfile });

    logger.info(`POST /registerProfile - ${JSON.stringify(createdProfile)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  registerProfile,
};
