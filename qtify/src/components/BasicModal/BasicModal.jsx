import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  height: "auto",
  width: "500px",
  border: "1px solid white",
  borderRadius: "10px",
};

const BasicModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen((prevState) => !prevState);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            gutterBottom
          >
            Feedback
          </Typography>
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            margin="dense"
          />
          <TextField
            fullWidth
            label="Email ID"
            type="email"
            variant="outlined"
            margin="dense"
          />
          <TextField
            fullWidth
            label="Subject"
            variant="outlined"
            margin="dense"
          />
          <TextField
            fullWidth
            label="Description"
            variant="outlined"
            margin="dense"
            multiline
            rows={4}
          />
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleClose}>
            Submit Feedback
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
