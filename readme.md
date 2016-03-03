Larp Logistics.

Tech Stack

The goal of this project is to provide an OSS LARP Character system.
Current Larp target: Shifted Lands.

The project is based on Nodejs, using Express as the Web framework.
Front end will likely be a hybrid of server-side and ReactJs.

Backend will likely be postgresql as it is fast and has strong json support.

Organization
Goal is to have everything organized by features
e.g. ```Root
      - features
        - shared
        - auth
        - character-creation
        - item-tags
          - routes.js
      - infrastructure
    ```
