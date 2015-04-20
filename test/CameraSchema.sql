CREATE TABLE Camera (
  CameraID int(11) NOT NULL AUTO_INCREMENT,
  MAC varchar(17) DEFAULT NULL,
  IP varchar(16) DEFAULT NULL,
  Status varchar(3) DEFAULT 'OFF',
  Description text DEFAULT NULL,
  CreatedBy varchar(20) DEFAULT NULL,
  CreatedTime varchar(20) DEFAULT NULL,
  UpdatedBy varchar(20) DEFAULT NULL,
  UpdatedTime varchar(20) DEFAULT NULL,
  PRIMARY KEY (CameraID),
  UNIQUE KEY (MAC),
  UNIQUE KEY (IP)
)
