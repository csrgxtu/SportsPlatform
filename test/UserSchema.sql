CREATE TABLE User (
  UserID int(11) NOT NULL AUTO_INCREMENT,
  UserName varchar(20) DEFAULT NULL,
  DisplayName varchar(20) DEFAULT NULL,
  Password varchar(32) DEFAULT NULL,
  CreatedBy varchar(20) DEFAULT NULL,
  CreatedTime varchar(20) DEFAULT NULL,
  UpdatedBy varchar(20) DEFAULT NULL,
  UpdatedTime varchar(20) DEFAULT NULL,
  PRIMARY KEY (`UserId`),
  UNIQUE KEY `UserName` (`UserName`),
) ENGINE=InnoDB AUTO_INCREMENT=18715 DEFAULT CHARSET=utf8
