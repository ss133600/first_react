export const PlayBtn = () ={
    <Progress>
          <BarWrap>
            <Bar />
          </BarWrap>

          <PlayTime>
            <Time>00:03</Time>
            <Time>03:40</Time>
          </PlayTime>
          </Progress>


            <li>
              <FontAwesomeIcon icon={faShuffle} />
            </li>
            <li>
              <FontAwesomeIcon icon={faBackward} />
            </li>
            <li>
              <FontAwesomeIcon icon={faPause} />
            </li>
            <li>
              <FontAwesomeIcon icon={faForward} />
            </li>
            <li>
              <FontAwesomeIcon icon={faRepeat} />
            </li>
          </BtnWrap>

}