import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../css/style.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paperBackGround: {
        padding: theme.spacing(2),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
        backgroundColor: '#3F51B5',
        color: '#fff'
    },
    mapInside: {
        display: 'flex',
        flexDirection: 'column',
        color: 'black'
        // border: '1px solid black'
    },
    apterMapInside: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // border: '1px solid black'

    },
}));



export default function NeedToKnow() {

    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Grid item xs={12}>
                <Paper className={classes.paperBackGround} >Neet to Know</Paper>
            </Grid>
            <hr />

            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <h2>
                        ⃝ –  The Conclusion of Verse
                    </h2>
                    <p>
                        “Waqf e Taam” represents the finishing end of a specific verse of Furqan e Hameed.
                        It is also known as the “Perfect Stop”. It is represented simply by a circle at the
                        conclusion of a Quranic line. The reciter has to stop here and take a breath before
                        continuing reading further. It also shows the complete deliverance of the message
                        in that sentence, so a narrator should look back at the verse, fully grasp its
                        gist and get ready to learn about the following lines.
                    </p>
                </Paper>
                <hr />
                <Paper className={classes.paper}>
                    <h2>
                        مـ – The Compulsory Stop
                    </h2>
                    <p>
                        The sign of “Waqf e Laazim” bounds the reader to stop reading at this point, as the word laazim means imperative or to do at any cost. It is so because if one does not take a pause here, the entire meaning of the sentence will alter radically.
                    </p>
                </Paper>
                <hr />
                <Paper className={classes.paper}>
                    <h2>
                        ط –  The Absolute Pause
                    </h2>
                    <p>
                        “Waqf e Mutlaq” is stop sign to indicate to the reader to take a gap in reciting the long passage by taking breath and discontinue the recitation for an instantaneous period of time. It is better to stop here because it makes the reading process easier by fully grabbing the meaning of already read text.
                    </p>
                </Paper>
                <hr />
                <Paper className={classes.paper}>
                    <h2>
                        ج –  The Permissible Stop
                    </h2>
                    <p>
                        “Waqf e Jaaiz” points toward completion of matter discussed in that fragment of the Ayah, so one needs to stop here, although it is not obligatory to do so, so that it can absorb the meaning discussed in previous part, and get ready to know about new matter in the following part of same verse.
                    </p>
                </Paper>
                <hr />
                <Paper className={classes.paper}>
                    <h2>
                        ز  –  Continue Reading
                    </h2>
                    <p>
                        The sign of “Waqf e Mujawwaz” means one does not need to take a pause and continue the recital process, although there is no prohibition on stopping here.
                    </p>
                </Paper>
                <hr />
                <Paper className={classes.paper}>
                    <h2>
                        ص – The Licensed Pause
                    </h2>
                    <p>
                        “Waqf e Murakh-khas” is a symbol that permits the reader to take a break and take a breath in case if getting tired only, but it is highly advisable to carry on reading.
                    </p>
                </Paper>
                <hr />
                <Paper className={classes.paper}>
                    <h2>
                        صلي– Preference for Continuation
                    </h2>
                    <p>
                        “Al-wasl Awlaa” indicates towards continue recitation of the verses with no need to stop.
                    </p>
                </Paper>
                <hr />
                <Paper className={classes.paper}>
                    <h2>
                        ق –  Better not to Stop
                    </h2>
                    <p>
                        “Qeela ‘Alayhil-Waqf” is a sign that shows not to stop recitation although there are differing opinions on whether to stop reading the verses or not.
                    </p>
                </Paper>
                <hr />
                <Paper className={classes.paper}>
                    <h2>
                        صل – The Permissible Pause
                    </h2>
                    <p>
                        “Qad Yusal” specifies about the permission of continue reading although one should stop here.
                    </p>
                </Paper>
                <hr />
                <Paper className={classes.paper}>
                    <h2>
                        قف – The Anticipation Mark
                    </h2>
                    <p>
                        “Qif” is inserted on the stop sign when a reader might expect the pause sign was not necessary.
                    </p>
                </Paper>
                <hr />
                <Paper className={classes.paper}>
                    <h2>
                        س – The Silence Symbol
                    </h2>
                    <p>
                        “Saktah” is a sign at which the reader should take a brief pause without breaking its breath before keeping on reading further.
                    </p>
                </Paper>
                <hr />
                <Paper className={classes.paper}>
                    <h2>
                        وقفتہ  – The Longer Pause
                    </h2>
                    <p>
                        “Waqfah” indicates the longer pause than Saktah with the same gist of not breaking one`s breath while taking the break.
                    </p>
                </Paper>
                <hr />
                <Paper className={classes.paper}>
                    <h2>
                        لا – No Need of Stopping
                    </h2>
                    <p>
                        One should not discontinue reading the verses at this sign of “Laa” as it would change the meaning of Quranic lines altogether, yet one can stop when it is used at the end of the Ayah with Circle Mark of conclusion.
                    </p>
                </Paper>
                <hr />
                <Paper className={classes.paper}>
                    <h2>
                        ك – Similar Meaning as Previous Sign
                    </h2>
                    <p>
                        “Kadhaalik or “like that” applies the same connotation of action as suggested by the preceding symbol.
                    </p>
                </Paper>
                <hr />
                <Paper className={classes.paper}>
                    <h2>
                        ∴ – The Embracing Stop
                    </h2>
                    <p>
                        “Mu’aanaqah” is a sign that signifies about stopping at either of the triplet included in it, with no discontinuation simultaneously.
                    </p>
                </Paper>
                <hr />


            </Grid>

        </div>
    )
}
