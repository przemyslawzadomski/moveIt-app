import React, { Component } from "react";
import ReactMarkdown from 'react-markdown'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ScrollTop from "react-scrolltop-button";
import Footer from "../Footer"
import Header from "../Header";
import "./FAQ.css";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 900
    // fontWeight: theme.typography.fontWeightRegular,
  },
  field: {
    background: "#f8c512"
  },
  text: {
    fontSize: theme.typography.pxToRem(16),
    color: "#323232"
  },
  fieldYellow: {
    background: "linear-gradient(180deg, #f8c512 30%, #edb60d 90%)"
  },
  main: {
    textAlign: "center",
    fontSize: theme.typography.pxToRem(40),
    fontWeight: 900,
    padding: "150px 0 50px 0"
  }
});

class FAQ extends Component {
  state = {
    faq: []
  };

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "/data/faq.json")
      .then(response => response.json())
      .then(data => this.setState({ faq: data }));
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="Width_480px">
        <ScrollTop
          text="to top"
          distance={100}
          breakpoint={768}
          style={{ backgroundColor: "#f8c512", zIndex: 9999 }}
          className="scroll-your-role"
          speed={10}
          target={0}
        />
        <Header />
        <h1 className="offert-header">Najczęściej zadawane pytania</h1>
        {/* <div className={classes.main}>Najczęściej zadawane pytania</div> */}
        <div className={classes.root}>
          {this.state.faq.map(item => (
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                className={classes.field}
              >
                <Typography className={classes.heading}>
                  {item.question}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.fieldYellow}>
                <Typography className={classes.text}>
                  <ReactMarkdown source={item.answer} />
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
        </div>
        <div className="faq_gap"> 
           
        </div>
        <Footer/>
      </div>
    );
  }
}

FAQ.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FAQ);
