CREATE TABLE teams (
    team_id INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    division VARCHAR(255) NOT NULL
);

INSERT INTO
    teams (team_id, name, division)
VALUES
    (1, 'New England Patriots', 'AFC East'),
    (2, 'Miami Dolphins', 'AFC East'),
    (3, 'Buffalo Bills', 'AFC East'),
    (4, 'New York Jets', 'AFC East');

INSERT INTO
    teams (team_id, name, division)
VALUES
    (1, 'Denver Broncos', 'AFC West'),
    (2, 'Kansas City Chiefs', 'AFC West'),
    (3, 'Las Vegas Raiders', 'AFC West'),
    (4, 'Los Angeles Chargers', 'AFC West');

    INSERT INTO
    teams (team_id, name, division)
VALUES
    (1, 'Baltimore Ravens', 'AFC North'),
    (2, 'Cincinnati Bengals', 'AFC North'),
    (3, 'Cleveland Browns', 'AFC North'),
    (4, 'Pittsburgh Steelers', 'AFC North');

    INSERT INTO
    teams (team_id, name, division)
VALUES
    (1, 'Houston Texans', 'AFC South'),
    (2, 'Indianapolis Colts', 'AFC South'),
    (3, 'Jacksonville Jaguars', 'AFC South'),
    (4, 'Tennessee Titans', 'AFC South');

INSERT INTO
    teams (team_id, name, division)
VALUES
    (1, 'Dallas Cowboys', 'NFC East'),
    (2, 'New York Giants', 'NFC East'),
    (3, 'Philadelphia Eagles', 'NFC East'),
    (4, 'Washington Football Team', 'NFC East');

INSERT INTO
    teams (team_id, name, division)
VALUES
    (1, 'Arizona Cardinals', 'NFC West'),
    (2, 'Los Angeles Rams', 'NFC West'),
    (3, 'San Francisco 49ers', 'NFC West'),
    (4, 'Seattle Seahawks', 'NFC West');

    INSERT INTO
    teams (team_id, name, division)
VALUES
    (1, 'Chicago Bears', 'NFC North'),
    (2, 'Detroit Lions', 'NFC North'),
    (3, 'Green Bay Packers', 'NFC North'),
    (4, 'Minnesota Vikings', 'NFC North');

    INSERT INTO
    teams (team_id, name, division)
VALUES
    (1, 'Atlanta Falcons', 'NFC South'),
    (2, 'Carolina Panthers', 'NFC South'),
    (3, 'New Orleans Saints', 'NFC South'),
    (4, 'Tampa Bay Buccaneers', 'NFC South');