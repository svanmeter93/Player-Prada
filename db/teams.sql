DROP TABLE IF EXISTS teams;

CREATE TABLE teams (
    team_id INTEGER PRIMARY KEY,
    city VARCHAR(255) NOT NULL,
    mascot VARCHAR(255) NOT NULL,
    division VARCHAR(255) NOT NULL
);

INSERT INTO
    teams(team_id, city, mascot, division)
VALUES
    (1, 'New England', 'Patriots', 'AFC East'),
    (2, 'Miami', 'Dolphins', 'AFC East'),
    (3, 'Buffalo', 'Bills', 'AFC East'),
    (4, 'New York', 'Jets', 'AFC East'),
    (5, 'Denver', 'Broncos', 'AFC West'),
    (6, 'Kansas City', 'Chiefs', 'AFC West'),
    (7, 'Las Vegas', 'Raiders', 'AFC West'),
    (8, 'Los Angeles', 'Chargers', 'AFC West'),
    (9, 'Baltimore', 'Ravens', 'AFC North'),
    (10, 'Cincinnati', 'Bengals', 'AFC North'),
    (11, 'Cleveland', 'Browns', 'AFC North'),
    (12, 'Pittsburgh', 'Steelers', 'AFC North'),
    (13, 'Houston', 'Texans', 'AFC South'),
    (14, 'Indianapolis', 'Colts', 'AFC South'),
    (15, 'Jacksonville', 'Jaguars', 'AFC South'),
    (16, 'Tennessee', 'Titans', 'AFC South'),
    (17, 'Dallas', 'Cowboys', 'NFC East'),
    (18, 'New York', 'Giants', 'NFC East'),
    (19, 'Philadelphia', 'Eagles', 'NFC East'),
    (20, 'Washington', 'Commanders', 'NFC East'),
    (21, 'Arizona', 'Cardinals', 'NFC West'),
    (22, 'Los Angeles', 'Rams', 'NFC West'),
    (23, 'San Francisco', '49ers', 'NFC West'),
    (24, 'Seattle', 'Seahawks', 'NFC West'),
    (25, 'Chicago', 'Bears', 'NFC North'),
    (26, 'Detroit', 'Lions', 'NFC North'),
    (27, 'Green Bay', 'Packers', 'NFC North'),
    (28, 'Minnesota', 'Vikings', 'NFC North'),
    (29, 'Atlanta', 'Falcons', 'NFC South'),
    (30, 'Carolina', 'Panthers', 'NFC South'),
    (31, 'New Orleans', 'Saints', 'NFC South'),
    (32, 'Tampa Bay', 'Buccaneers', 'NFC South')
