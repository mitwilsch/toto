// stand-in for DB
// When finished, utils should write in this format to DB
/*
An example todo string: 
  `x (A) 2016-05-20 2016-04-30 Hello world +Tag @Context due:2016-05-30`
  JSON fields: 
    completion: t/f
    priority: f/A-Z (always enclosed by parens)
    completion date: (optional)
    creation date: auto-generate date (check for no dates, technically this is optional unless completion date is not included)
    Text string: everything but tags, context, other fields
    tags:
    contexts:
    special:
    {key: x, due: date,}
    */
const text =
  '2020-05-28 implement https://addyosmani.com/blog/using-npm-offline/\n2020-05-28 Research React google analytics needs. Check for access to subpaths created by React';

const defaultItem = {
  completed: false,
  priority: null,
  dateCompleted: null,
  dateCreated: null,
  description: null, // dont split out tags and context, treat as static
  tags: [],
  contexts: [],
  special: {},
};

console.log(defaultItem);

console.log('hello');
