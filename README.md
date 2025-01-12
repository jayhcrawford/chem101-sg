This is designed to aid in studying Professor Boan's Chem 101 at LACC

[It's deployed on Vercel](https://chem101-sg.vercel.app/)

This professor is extremely enthusiastic about certain elements of Chemistry instruction. 
Organizing slides in a coherent manner, and explicitly communicating the specifics of the expectation for the ACS exam were not her passions.
Having a functional Canvas shell was also not her passion. On multiple occasions, questions were missing critical data, like charts. On other occasions, the answer key was incorrect.

After being frustrated with, and confused by this delivery format for ~6 weeks, I realized that I could do better, and that I had to do better to get a good grade.

One of the issues was that the content was highly scattered and without cogent structure. There was no *one* place to find relevant formulas. There was no *one* place to see what needed to be understood. There were many fonts, many font colors, and many techniques of content delivery on a single slide.
Another issue was that all of the slides were Powerpoints, and had absolutely no relevant naming convention. For example, "__22Redoweek3" may be the slides delivered during week 7, and "MolecularStructures" may be the slides during week 3. On top of that, actually locating the slides in the Canvas shell was very complicated, and required logging into Canvas. Canvas is very annoying to login to, and also slow. After renaming the PDFs to their relevant weeks/material I converted them to PDF and hosted them on AWS (PDF is a non-accessible format, apparently). My experience with Powerpoints is that they are extremely difficult to view, and sluggish. I find that PDFs open almost instantly and are easy to view on my phone--the device that I primarily reviewed Chemistry slides on.

There was no table of important conversions, the Thermodynamics Chart was frequently necessary but difficult to access, and there was no Polyatomic Ions sheet. I built/hosted these to eliminate speed bumps.

I designed this simple web app to be based on Git, an AWS S3 Bucket, and a REST API which communicates with MongoDB. The AWS S3 Bucket hosts images. Git helps to track any changes. The REST API permitted my colleagues to make submissions for potential revision by databasing their suggestions in MongoDB.  I did not permit my colleagues to make edits without those edits first being reviewed, for obvious reasons.


My aim was to smack this together quickly, and make it usable, and peppy. Canvas is so slow. I wanted to eliminate the obstacles of confusion and Canvas.
This web app renders material using MarkdownJS and the free [Equation Editor API] (https://editor.codecogs.com/). Implementing LaTeX was way too involved for this simple, open source study guide, the Equation Editor API did it better.

The class is structured so that the final is the ACS Exam. 
I got an A in this class and scored 75% on the ACS Exam. The national average is 50%. I did not study very hard, but I did try to translate my studies into this web app, which I believe helped me a lot on the ACS Exam. 
