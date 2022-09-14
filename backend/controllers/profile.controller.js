import profileService from '../services/profile.service.js';

async function registerProfile(req, res, next) {
  try {
    const profile = {
      aboutYouPi: req.body.aboutYouPi,
      aboutYouCareer: req.body.aboutYouCareer,
      aboutYouLanguage: req.body.aboutYouLanguage,
      jobExperience: req.body.jobExperience,
      skills: req.body.skills,
    };

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
