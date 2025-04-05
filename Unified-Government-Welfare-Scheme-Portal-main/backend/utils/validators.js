import Joi from 'joi';

export const validateScheme = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    eligibility: Joi.object({
      age: Joi.object({
        min: Joi.number().required(),
        max: Joi.number().required()
      }),
      income: Joi.object({
        max: Joi.number().required()
      }),
      occupation: Joi.array().items(Joi.string()).required()
    }),
    requiredDocs: Joi.array().items(Joi.string()).required(),
    benefits: Joi.array().items(Joi.string()).required()
  });
  
  return schema.validate(data);
};
