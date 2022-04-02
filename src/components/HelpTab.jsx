import React, { Component, useState } from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";
// import { CopyToClipboard } from "react-CopyToClipboard";
// import { makeStyles } from "@material-ui/core/styles";
// import { useTheme } from "@material-ui/core/styles";
// import Box from "@material-ui/core/Box";
// import Grid from "@material-ui/core/Grid";
// import Tooltip from "@material-ui/core/Tooltip";

// // core components
// import componentStyles from "assets/theme/views/admin/icons.js";

// const useStyles = makeStyles(componentStyles);

// const Icons = () => {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [copiedText, setCopiedText] = useState();
//   return (
//     <>
//       <Grid
//         item
//         lg={3}
//         md={6}
//         xs={12}
//         component={Box}
//         paddingLeft="15px"
//         paddingRight="15px"
//       >
//         <CopyToClipboard
//           text={"ni ni-active-40"}
//           onCopy={() => setCopiedText("ni ni-active-40")}
//         >
//           <Tooltip
//             title={
//               copiedText === "ni ni-active-40"
//                 ? "This was Copied!"
//                 : "Copy To Clipboard"
//             }
//             placement="top"
//           >
//             <Box
//               component="button"
//               fontFamily="inherit"
//               fontSize="16px"
//               fontWeight="400"
//               lineHeight="1.25"
//               display="inline-block"
//               width="100%"
//               margin=".5rem 0"
//               padding="24px"
//               textAlign="left"
//               color={theme.palette.gray[800]}
//               border="0"
//               borderRadius="4px"
//               className={classes.button}
//               data-clipboard-text="album-2"
//               type="button"
//             >
//               <div>
//                 <i className="ni ni-active-40" />
//                 <span>active-40</span>
//               </div>
//             </Box>
//           </Tooltip>
//         </CopyToClipboard>
//       </Grid>
//     </>
//   );
// };






class HelpTab extends Component {
  constructor() {
    super();
  }

  render() {
  // const [copiedText, setCopiedText] = useState();
    return (
      <div>
        <h1>HelpTab</h1>
        {/* <Grid
        item
        lg={3}
        md={6}
        xs={12}s
        component={Box}
        paddingLeft="15px"
        paddingRight="15px"
      ></Grid> */}
          <h3>Create a Topic: </h3>
        <div class="codeblock">
          <button type="button" class="copyButton" >Copy</button>
          <span>$ docker exec -it kafka101 \ <br></br>
            kafka-topics \<br></br>
            --create \<br></br>
            --partitions 6 \<br></br>
            --replication-factor 3 \<br></br>
            --topic demo-topic \<br></br>
            --bootstrap-server kafka101:29092<br></br>
          </span>
          {/* <CopyToClipboard
           text={"ni ni-active-40"}
           onCopy={() => setCopiedText("ni ni-active-40")}
          >
          <Tooltip
            title={
              copiedText === "ni ni-active-40"
                ? "This was Copied!"
                : "Copy To Clipboard"
            }
            placement="top"
          ></Tooltip>
      </CopyToClipboard> */}
        </div>
      </div>
    );
  }
}

export default HelpTab;
